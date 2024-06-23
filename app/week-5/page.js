import Item from "./item";
import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="bg-[#656d4a]">
      <h1 className="text-3xl text-[#252422] font-bold text-justified text-justified m-1">
        Shopping List
      </h1>
      <ul>
        <ItemList />
      </ul>
    </main>
  );
}
