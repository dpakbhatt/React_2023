import Link from "next/link";

export default function MealDetailsPage({ params }) {
  return (
    <>
      <h1>Meal Details Page</h1>
      <p>{params.slug}</p>
    </>
  );
}
