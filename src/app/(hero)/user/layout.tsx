export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h2>user layout</h2>
      <div>{children}</div>
    </div>
  );
}
