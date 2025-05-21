export default function UserTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <h3>Hello UserTemplate--</h3>
      {children}
    </div>
  );
}
