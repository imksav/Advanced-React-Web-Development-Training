import { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [newItem, setNewItem] = useState(""); // State to hold the input value

  // Function to add a new item
  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, { id: Date.now(), text: newItem }]); // Add a new item with a unique ID
      setNewItem(""); // Clear the input field
    }
  };

  // Function to remove an item by its ID
  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{ padding: "5px", width: "80%" }}
        />
        <button
          onClick={addItem}
          style={{ padding: "5px 10px", marginLeft: "5px" }}
        >
          Add
        </button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id} // Unique key for each list item
            style={{
              margin: "10px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            {item.text}
            <button
              onClick={() => removeItem(item.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                borderRadius: "3px",
                padding: "5px 10px",
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todo;
