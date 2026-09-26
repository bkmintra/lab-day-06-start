"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  
  const getLinkClass = (path, exact = false) => {
    const isActive = exact ? pathname === path : pathname.startsWith(path);
    return isActive ? "font-bold text-orange-600" : "text-gray-600 hover:text-gray-900";
  };

  return (
    <nav className="max-w-4xl mx-auto flex gap-6 p-4">
      <Link href="/" className={getLinkClass('/', true)}>หน้าแรก</Link>
      <Link href="/recipes" className={getLinkClass('/recipes')}>สูตรอาหาร</Link>
      <Link href="/about" className={getLinkClass('/about')}>เกี่ยวกับ</Link>
    </nav>
  );
}
