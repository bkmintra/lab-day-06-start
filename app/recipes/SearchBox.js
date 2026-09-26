"use client";
import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function SearchBox({ initialQuery = "" }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(initialQuery);

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentParams = new URLSearchParams(searchParams.toString());
      if (q) {
        currentParams.set('q', q);
      } else {
        currentParams.delete('q');
      }
      // replace prevents adding to history stack for every character
      router.replace(`/recipes?${currentParams.toString()}`);
    }, 400);

    return () => clearTimeout(timer);
  }, [q, router, searchParams]);

  return (
    <input
      value={q}
      onChange={e => setQ(e.target.value)}
      placeholder="ค้นหาเมนู เช่น chicken, pasta"
      className="border rounded px-3 py-2 w-full mb-6"
    />
  );
}
