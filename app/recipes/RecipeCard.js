import Link from 'next/link';
import FavoriteButton from './FavoriteButton';

export default function RecipeCard({ recipe }) {
  return (
    <Link href={`/recipes/${recipe.idMeal}`} className="relative border rounded overflow-hidden block group">
      <FavoriteButton />
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full aspect-square object-cover" />
      <p className="p-2 text-sm font-medium">{recipe.strMeal}</p>
    </Link>
  );
}
