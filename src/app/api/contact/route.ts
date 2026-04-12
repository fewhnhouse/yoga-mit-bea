import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_EMAIL = "info@yogamitbea.de";
const RESEND_FROM_EMAIL = "Kontaktformular <kontakt@yogamitbea.de>";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "E-Mail-Versand ist noch nicht konfiguriert (RESEND_API_KEY fehlt)." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, email, phone, subject, message, site } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Bitte fülle alle Pflichtfelder aus." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Bitte gib eine gültige E-Mail-Adresse ein." },
        { status: 400 }
      );
    }

    // Map subject values to readable labels
    const subjectLabels: Record<string, string> = {
      // Yoga subjects
      individuell: "Yoga Individuell",
      kurse: "Yogakurse",
      aktuell: "Yoga aktuell (Yogatag/Wochenende)",
      weg: "Yoga Weg im Lonetal",
      // Psychotherapie subjects
      massage: "Therapeutische Massage",
      atemtherapie: "Atemtherapie",
      klangschalen: "Klangschalentherapie",
      einzelsitzung: "Therapeutische Einzelsitzung",
      // General
      frage: "Allgemeine Frage",
      sonstiges: "Sonstiges",
    };

    const subjectLabel = subjectLabels[subject] || subject;
    const siteName = site === "therapie" ? "Psychotherapie mit Bea" : "Yoga mit Bea";

    // Escape user content before interpolating into HTML email.
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : "";
    const safeSubjectLabel = escapeHtml(subjectLabel);
    const safeMessage = escapeHtml(message);

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: RESEND_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `[${siteName}] Neue Anfrage: ${subjectLabel}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5a6b5d; border-bottom: 2px solid #5a6b5d; padding-bottom: 10px;">
            Neue Kontaktanfrage
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; width: 120px;">Website:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${siteName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">E-Mail:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="mailto:${safeEmail}" style="color: #5a6b5d;">${safeEmail}</a>
              </td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Telefon:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">
                <a href="tel:${safePhone}" style="color: #5a6b5d;">${safePhone}</a>
              </td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold;">Betreff:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${safeSubjectLabel}</td>
            </tr>
          </table>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #5a6b5d; margin-bottom: 10px;">Nachricht:</h3>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">
${safeMessage}
            </div>
          </div>
          
          <p style="color: #888; font-size: 12px; margin-top: 30px; padding-top: 15px; border-top: 1px solid #eee;">
            Diese Nachricht wurde über das Kontaktformular auf ${siteName} gesendet.
          </p>
        </div>
      `,
      text: `
Neue Kontaktanfrage von ${siteName}

Name: ${name}
E-Mail: ${email}
${phone ? `Telefon: ${phone}` : ""}
Betreff: ${subjectLabel}

Nachricht:
${message}

---
Diese Nachricht wurde über das Kontaktformular gesendet.
      `.trim(),
    });

    if (error) {
      console.error("Resend error:", error);
      if (
        error.statusCode === 403 &&
        typeof error.message === "string" &&
        error.message.includes("You can only send testing emails")
      ) {
        return NextResponse.json(
          {
            error:
              "Resend blockiert den Versand (Testmodus). Prüfe, ob der API-Key zur verifizierten Domain gehoert und der From-Header eine Adresse auf yogamitbea.de verwendet.",
          },
          { status: 503 }
        );
      }
      return NextResponse.json(
        { error: "Fehler beim Senden der Nachricht. Bitte versuche es später erneut." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Nachricht erfolgreich gesendet!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Ein unerwarteter Fehler ist aufgetreten." },
      { status: 500 }
    );
  }
}

