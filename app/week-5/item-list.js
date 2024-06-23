"use client";

import Item from "./item.js";
import { useState } from "react";
import DataList from "./item.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...DataList].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <>
      <div>
        <label>Sort by: </label>
        <button
          className="m-2 p-2 bg-yellow-200 hover:bg-yellow-400 text-lime-900 rounded-md"
          value="name"
          onClick={(event) => setSortBy(event.target.value)}
        >
          Name
        </button>
        <button
          className="m-2 p-2 bg-yellow-200 hover:bg-yellow-400 text-lime-900 rounded-md"
          value="category"
          onClick={(event) => setSortBy(event.target.value)}
        >
          Category
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 p-5">
        {sortedItems.map((item) => (
          <Item item={item} />
        ))}
      </section>
    </>
  );
}
