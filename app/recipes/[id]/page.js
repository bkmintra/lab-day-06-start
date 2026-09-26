import RecipeDetailCard from './RecipeDetailCard';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const p = await params;
  return {
    title: `Recipe ${p.id} | Recipe Browser`
  };
}

export default async function RecipePage({ params }) {
  const p = await params;
  const { id } = p;
  
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
  const data = await res.json();
  
  if (!data.meals) {
    notFound();
  }

  return <RecipeDetailCard meal={data.meals[0]} />;
}
