import ProfileSection from "./ProfileSection";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
    <title>Ini BUKAN Home</title>
    {children}
    <ProfileSection/>
    </>
      
  );
}
