import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Ini Home</title>
      </head>
      <body>
      <br />
   <div><Link href="/">home</Link>
   <Link href="/dashboard">Dashboard</Link></div>
        {children}
        </body>
    </html>
  );
}
