import React, { useState } from "react";
import AddItem from "./AddItem";
import ListItem from "./ListItem";
import uniqueId from '@bit/lodash.lodash.unique-id';
import SemanticUiStyle from '@bit/semantic-org.semantic-ui-react.internal.style-links';

const containerStyle = {
  fontSize:'20px',
  width: "100%",
  height: "100%",
  textAlign: "center",
  padding: 8,
  border: "1px solid #c3c0c0",
  borderRadius: 3,
  backgroundColor: "#fafbfc"
};

export default function Todo() {
  const [todos, setTodo] = useState([{ id: "item", title: "Do homework" }]);

  function removeItem(id) {
    const newTodo = todos.filter(item => id !== item.id);
    setTodo(newTodo);
  }
  function addItem(title) {
    const newTodo = [...todos, { title, id: uniqueId('item_') }];
    setTodo(newTodo);
  }
  return (
    <div style={containerStyle}>
      <SemanticUiStyle />
      <AddItem addItem={addItem} />
      <ListItem removeItem={removeItem} todos={todos} />
    </div>
  );
}
