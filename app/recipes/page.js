import SearchBox from './SearchBox';
import RecipeCard from './RecipeCard';

export const metadata = {
  title: 'Recipes | Recipe Browser',
}

export default async function RecipesPage({ searchParams }) {
  const sp = await searchParams;
  const q = sp.q || '';

  const apiUrl = q
    ? `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(q)}`
    : 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert';

  const res = await fetch(apiUrl);
  const data = await res.json();
  const meals = data.meals || [];

  return (
    <>
      <h1 className="text-2xl font-bold mb-4">สูตรอาหาร</h1>
      <SearchBox initialQuery={q} />
      
      {meals.length === 0 && (
        <p className="text-gray-500">
          {q ? `ไม่พบสูตรที่ตรงกับ "${q}"` : 'ไม่มีข้อมูล'}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {meals.map(m => (
          <RecipeCard key={m.idMeal} recipe={m} />
        ))}
      </div>
    </>
  );
}
