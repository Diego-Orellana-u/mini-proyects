import { useEffect, useState } from "react";

export default function useBreed(animal) {
  const [breed, setBreed] = useState([]);

  useEffect(() => {
    requestBreeds();
  }, [animal]);

  async function requestBreeds() {
    if (animal.length > 1) {
      const res = await fetch(
        `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
      );
      const json = await res.json();
      setBreed(json.breeds);
    }
  }

  return breed;
}
