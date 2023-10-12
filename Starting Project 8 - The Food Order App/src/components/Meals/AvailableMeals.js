import React, { useCallback, useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const AvailableMeals = () => {
  const [meals, setMealList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchMeals = useCallback(async () => {
    try {
      const response = await fetch(
        "https://testing-http-a9632-default-rtdb.firebaseio.com/meals.json"
      );
      const responseData = await response.json();
      let mealsList = [];
      for (const key in responseData) {
        mealsList.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMealList(mealsList);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  const mealsData = meals.map((meal) => {
    return (
      <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        {isLoading && <p style={{ textAlign: "center" }}>Loading....</p>}
        {!isLoading && <ul>{mealsData}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
