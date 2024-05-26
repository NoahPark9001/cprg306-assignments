import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold">Shopping list</h1>
      <ul>
        <ItemList />
      </ul>
    </main>
  );
}
