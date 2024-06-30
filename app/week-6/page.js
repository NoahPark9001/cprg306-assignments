"use client";

import ItemList from "./item-list";
import itemsData from "./item.json";
import { useState } from "react";
import NewItem from "./new-item";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (event) => {
    setItems([...items, event]);
  };
  return (
    <main className="bg-[#656d4a]">
      <h1 className="text-4xl text-yellow-600 font-bold text-justified text-justified m-1 pl-10 pb-3">
        Shopping List
      </h1>
      <div>
        <NewItem onAddItem={handleAddItem} />
      </div>
      <ul>
        <ItemList items={items} />
      </ul>
    </main>
  );
}
