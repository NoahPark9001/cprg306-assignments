"use client";

import ItemList from "./item-list";
import itemsData from "./item.json";
import { useState } from "react";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleItemSelect = (item) => {
    const cleanName = item.name
      .split(",")[0]
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      )
      .trim();
    setSelectedItemName(cleanName);
  };

  const handleAddItem = (event) => {
    setItems([...items, event]);
  };
  return (
    <main className="bg-[#656d4a] text-white min-h-screen flex p-4">
      <div className="flex flex-col">
        <h1 className="text-4xl text-yellow-600 font-bold text-justified text-justified m-1 pl-10 pb-3">
          Shopping List
        </h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div className="flex flex-col ml-5">
        {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
      </div>
    </main>
  );
}
