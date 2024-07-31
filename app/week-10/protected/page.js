"use client";

import { useState, useEffect } from "react";
import { addNewItem, getItemList } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function loadItems() {
      if (user) {
        const itemsList = await getItemList(user.uid);
        setItems(itemsList);
      }
    }
    loadItems();
  }, [user]);

  const handleAddItem = async () => {
    let newItem = {
      name: "Onion",
      category: "produce",
      quantity: 4,
    };

    if (user) {
      const addedItem = await addNewItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { ...newItem, id: addedItem }]);
    }
  };

  return (
    <main>
      <header>
        <h1>Protected Page</h1>
      </header>
      <section>
        {user ? (
          <div>
            <p>You are logged in! This page is Protected</p>
            <button onClick={handleAddItem}>Add Test Item</button>
            <ul>
              {items.map((item) => (
                <li key={item.id}>
                  {item.name} - {item.category} - {item.quantity}
                </li>
              ))}
            </ul>
            <button onClick={firebaseSignOut}>Sign Out</button>
          </div>
        ) : (
          <p>You must be logged in to view this page.</p>
        )}
      </section>
    </main>
  );
}
