"use client";

import Item from "./item.js";
import { useState } from "react";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const validItems = Array.isArray(items) ? items : [];

  const sortedItems = [...validItems].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <>
      <div className="pl-10">
        <label>Sort by: </label>
        <button
          className="m-2 p-2 bg-yellow-200 hover:bg-yellow-400 text-lime-900 rounded-md"
          value="name"
          onClick={() => setSortBy("name")}
        >
          Name
        </button>
        <button
          className="m-2 p-2 bg-yellow-200 hover:bg-yellow-400 text-lime-900 rounded-md"
          value="category"
          onClick={() => setSortBy("category")}
        >
          Category
        </button>
      </div>

      <section className="grid grid-cols-1 gap-5 p-5">
        {sortedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
