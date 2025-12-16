export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sanity-studio" style={{ height: "100vh" }}>
      {children}
    </div>
  );
}

