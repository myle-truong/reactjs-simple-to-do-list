import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [items, setItems] = useState([]);

  //setup and save data after add on.
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  //Update list things must done to the list
  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText('');
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Things Must Done</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(todoItem => {
            return <li>{todoItem}</li>;
          })}
          {/* {items.map(todoItem => (
            <li>{todoItem}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}

export default App;
