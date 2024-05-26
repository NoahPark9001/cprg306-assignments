export default function Item({ name, quantity, category }) {
  return (
    <div>
      <h2 className="text-2xl font-bold"> {name}</h2>
      <p className="text-sm">
        Buy {quantity} In {category}
      </p>
    </div>
  );
}
