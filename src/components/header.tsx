'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const router = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'user',
    path: '/user',
  },
  {
    name: 'userDetail',
    path: '/user/userDetail',
  },
];
export default function Header() {
  const pathname = usePathname();
  return (
    <div className="flex gap-3">
      {router.map((item) => (
        <Link key={item.name} href={item.path} className={`text-[#50d71e] ${pathname === item.path ? 'text-red-500' : ''}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
