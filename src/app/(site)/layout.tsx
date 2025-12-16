import { SiteProvider } from "@/context/SiteContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SiteProvider>
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </SiteProvider>
  );
}

