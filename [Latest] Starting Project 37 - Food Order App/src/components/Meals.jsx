import { useEffect } from "react";
import { getMeals } from "../utils/httpRequests";
import { useState } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await getMeals();
        if (!response.ok) {
          throw new Error("Something went wrong");
          return;
        }
        const result = await response.json();
        setMeals(result);
      } catch (err) {
        console.log(err);
      }
    }

    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
