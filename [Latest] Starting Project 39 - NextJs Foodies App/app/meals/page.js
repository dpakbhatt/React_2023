import Link from "next/link";

export default function MealsPage() {
  return (
    <>
      <h1>Meals Page</h1>
      <p>
        <Link href="/meals/meal-1">First Meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-2">Second Meal</Link>
      </p>
      <p>
        <Link href="/meals/meal-3">Third Meal</Link>
      </p>
    </>
  );
}
