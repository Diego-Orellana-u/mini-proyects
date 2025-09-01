import { useDebugValue, useEffect, useState } from "react";

export default function usePizzaOfTheDay() {
  const [pizzaOfTheDay, setPizzaOftheDay] = useState();

  useDebugValue(
    pizzaOfTheDay
      ? `${pizzaOfTheDay.id}: ${pizzaOfTheDay.name}`
      : "Doesn't exist"
  );

  useEffect(() => {
    async function fetchPizzaOfTheDay() {
      const res = await fetch("/api/pizza-of-the-day");
      const json = await res.json();
      setPizzaOftheDay(json);
    }

    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
}
