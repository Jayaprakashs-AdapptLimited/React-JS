import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, onDeleteList }) {
  // console.log(items);
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  // To add Sort By Description
  // if (sortBy === "description")
  //   console.log(items);
  //   sortedItems = items
  //     .slice()
  //     .sort((a, b) => a.description.localCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItems={onToggleItems} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> Sort By Input</option>
          <option value="description"> Sort By Description</option>
          <option value="packed"> Sort By Packed status</option>
        </select>
        <button onClick={onDeleteList}> Clear List</button>
      </div>
    </div>
  );
}
