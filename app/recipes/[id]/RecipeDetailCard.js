import Link from 'next/link';
import { getIngredients } from '@/lib/getIngredients';

export default function RecipeDetailCard({ meal }) {
  const ingredients = getIngredients(meal);

  return (
    <div className="bg-white rounded shadow p-6">
      <Link href="/recipes" className="text-orange-600 hover:underline mb-4 inline-block">
        ← กลับไปหน้าสูตรอาหาร
      </Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full md:w-1/3 rounded object-cover" />
        <div>
          <h1 className="text-3xl font-bold mb-2">{meal.strMeal}</h1>
          <p className="text-gray-500 mb-4">{meal.strCategory} · {meal.strArea}</p>
          
          <h2 className="text-xl font-bold mb-2">ส่วนผสม</h2>
          <ul className="list-disc list-inside mb-4">
            {ingredients.map((ing, idx) => (
              <li key={idx}>{ing.name} {ing.measure && `- ${ing.measure}`}</li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">วิธีทำ</h2>
        <p className="whitespace-pre-line">{meal.strInstructions}</p>
      </div>
    </div>
  );
}
