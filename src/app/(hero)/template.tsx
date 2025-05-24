export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h3>Hello [hero] root Template--</h3>
      {children}
    </div>
  );
}
