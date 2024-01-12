export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em> Start adding some items to your packing list</em>
      </footer>
    );
  const numberOfItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numberOfItems) * 100);
  // console.log(percentage);
  return (
    <footer className="stats">
      <em>
        {" "}
        {percentage === 100
          ? `You got everything, ready to go`
          : `You have ${numberOfItems} items on your list and you already packed ${numPacked}(${percentage}%)`}
      </em>
    </footer>
  );
}
