"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );
  const data = await response.json();
  console.log("Fetched data:", data);
  return data.meals;
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMealIdeas = async () => {
      const mealsData = await fetchMealIdeas(ingredient);
      console.log("Meals data:", mealsData);
      setMeals(mealsData || []);
    };

    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div className="p-4">
      <h2 className="text-2xl text-yellow-600 font-bold mb-4">Meal Ideas</h2>
      <div>
        <p className="text-xl">
          Here are some meal ideas using <b>{ingredient}</b>:
        </p>
        <ul>
          {meals.length === 0 ? (
            <p>No meal ideas found.</p>
          ) : (
            meals.map((meal) => (
              <li
                key={meal.idMeal}
                className="mb-2 border-2 border-gray-700 p-2 rounded-lg bg-stone-700"
              >
                {meal.strMeal}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
