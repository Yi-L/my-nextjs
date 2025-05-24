import Header from '@/components/header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-amber-600">
        <h1>hero root layout------</h1>
        <Header />
        {children} {/* 这里实际是 template.tsx */}
      </div>
    </>
  );
}
