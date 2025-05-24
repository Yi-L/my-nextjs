export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // layout.tsx 嵌套 template.tsx , children 一直传入 template.tsx
  return (
    <div>
      <h3>Hello [hero] root Template--</h3>
      {children}
    </div>
  );
}
