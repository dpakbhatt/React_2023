export async function getMeals() {
  const response = await fetch("http://localhost:3000/meals");

  return response;
}
