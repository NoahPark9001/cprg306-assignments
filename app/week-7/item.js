export default function Item({ item, onSelect }) {
  return (
    <div
      className="p-2 m-4  border-red-500 rounded-lg bg-stone-700 max-w-sm"
      onClick={() => onSelect(item)}
    >
      <h2 className="text-2xl font-bold text-white"> {item.name}</h2>
      <p className="text-sm text-stone-300">
        Buy {item.quantity} In {item.category}
      </p>
    </div>
  );
}
