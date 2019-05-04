import React from "react";
import List from "@bit/semantic-org.semantic-ui-react.list";

export default function ListItem(props) {
  function removeItem(id) {
    props.removeItem(id);
  }

  function renderList() {
    return props.todos.map(item => (
        <List.Item key={item.id}>
          {item.title}
          <List.Icon
            verticalAlign='middle'
            name="trash"
            onClick={() => removeItem(item.id)}
          />
        </List.Item>
    ));
  }
  return <List divided relaxed>{renderList()}</List>;
}
