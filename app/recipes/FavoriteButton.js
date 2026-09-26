"use client";
import { useState } from 'react';

export default function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <button 
      onClick={(e) => {
        e.preventDefault();
        setIsFavorite(!isFavorite);
      }}
      className="absolute top-2 right-2 bg-white/80 text-orange-600 rounded-full p-1 w-8 h-8 flex items-center justify-center shadow"
    >
      {isFavorite ? '★' : '☆'}
    </button>
  );
}
