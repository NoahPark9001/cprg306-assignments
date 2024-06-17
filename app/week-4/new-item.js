"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      name: name,
      quantity: quantity,
      category: category,
    };

    console.log(item);

    alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    setName("");
    setQuantity(1);
    setCategory("produce");

    const nameHandler = (event) => setName(event.target.value);
    const quantityHandler = (event) => setQuantity(event.target.value);
    const categoryHandler = (event) => setCategory(event.target.value);
  };

  return <div></div>;
}
