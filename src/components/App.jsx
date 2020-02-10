import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import InPutArea from './InPutArea';

function App() {
  const [items, setItems] = useState([]);
  //
  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }
  //setup for delete items which done
  // function deleteItem(id) {
  //   setItems(prevItems => {
  //     return prevItems.filter((item, index) => {
  //       return index !== id;
  //     });
  //   });
  // }

  return (
    <div className="container">
      <div className="heading">
        <h1>Things must done</h1>
      </div>
      <InPutArea onAdd={addItem} />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={todoItem}
              // onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
