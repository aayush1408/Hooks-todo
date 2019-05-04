import React, { useState } from "react";
import Button from '@bit/semantic-org.semantic-ui-react.button';
import Input from '@bit/semantic-org.semantic-ui-react.input'


export default function AddItem(props) {
  const [text, handleText] = useState("");
  function handleChange(e) {
    handleText(e.target.value);
  }
  function addItem() {
    props.addItem(text);
    handleText("");
  }
  return (
    <>
      <div style={{ margin: "5px" }}>
        <Input
          focus
          value={text}
          onChange={handleChange}
          placeholder="Add the item"
        />
      </div>
      <div>
        <Button size="small" primary onClick={addItem}>
          Add
        </Button>
      </div>
    </>
  );
}
