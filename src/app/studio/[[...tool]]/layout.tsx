export const metadata = {
  title: "Sanity Studio | Yoga & Therapie mit Bea",
  description: "Content management for the yoga and therapy website",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}

