import Navigation from "../components/global/navigation";

export default function ElementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
