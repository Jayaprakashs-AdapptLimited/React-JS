import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Shorts", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
];

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // console.log(item);
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // console.log(id);
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteList() {
    const confirmed = window.confirm(`Are you sure want to delete all items`);
    if (confirmed) {
      setItems([]);
    } else return;
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItems={handleToggleItem}
        onDeleteList={handleDeleteList}
      />
      <Stats items={items} />
    </div>
  );
}


export default App;
