"use client";

import { useState } from "react";

const generateRandomId = () => {
  return Math.random().toString(36).substring(2, 7);
};

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      id: generateRandomId(),
      name: name,
      quantity: quantity,
      category: category,
    };

    // console.log(item);

    // alert(`Added item: ${name}, quantity: ${quantity}, category: ${category}`);

    onAddItem(item);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  const nameHandler = (event) => setName(event.target.value);
  const quantityHandler = (event) => setQuantity(event.target.value);
  const categoryHandler = (event) => setCategory(event.target.value);

  return (
    <div className="flex justify-left items-center bg-[#656d4a] pl-10 pb-5">
      <div className="border-2 border-gray-700 p-2 rounded-lg bg-stone-700">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 p-3">
          <label className="text-white">
            Name:
            <input
              className="text-black w-full mt-1 border-2 border-gray-700 p-2 rounded-lg"
              placeholder="Item Name"
              type="text"
              value={name}
              onChange={nameHandler}
              required
            />
          </label>
          <br />
          <label className="text-white">
            Quantity:
            <input
              className="text-black mt-1 p-1 block w-full rounded-md bg-gray-100 focus:bg-white border-2 border-gray-700"
              type="number"
              value={quantity}
              onChange={quantityHandler}
              min="1"
              max="99"
              required
            />
          </label>
          <br />
          <label className="text-white">
            Category:
            <select
              className="text-black mt-1 p-1 block w-full rounded-md bg-gray-100 focus:bg-white border-2 border-gray-700"
              value={category}
              onChange={categoryHandler}
            >
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen_foods">Frozen Foods</option>
              <option value="canned_goods">Canned Goods</option>
              <option value="dry_goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
            </select>
          </label>
          <br />
          <button
            className="w-full py-2 px-4 mt-4 bg-yellow-200 hover:bg-yellow-400 text-lime-900 rounded-md"
            type="submit"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
