import React from "react";
import List from "./List";
import items from "./items.json";
function App() {
  return (
    <div>
      <List items={items} />
    </div>
  );
}

export default App;
