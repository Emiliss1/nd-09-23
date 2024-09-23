import './App.css';
import { useState } from 'react';

function AddItems() {
    const [item, setItem] = useState('');
    const [items, setItems] = useState([
      {
        text: 'labas',
        checked: false
      },
      {
        text: 'ate',
        checked: true
      }
    ]);

    const toggleChecked = (index) => {
      const updatedItems = items.map((item, i) => 
        i === index ? { ...item, checked: !item.checked } : item
      );
      setItems(updatedItems);
    }

    const removeItem = index => {
      setItems(oldItems => {
        return oldItems.filter((item, i) => i !== index)
      })
    }

  return (
    <div>
      <input type="text" className='input' value={item} onChange={(e) => {setItem(e.target.value)}} />
      <button className='btn' onClick={() => {
        if (item !== '') {
          items.push({
            text: item,
            checked: false
          })
          setItem('');
        }
      }}>Add</button>
      {items && items.map((item, index) => (
        <div className='item'><button className='checkbtn' style={{ background: item.checked ? "royalblue" : "rgb(118, 140, 206)" }} onClick={() => {toggleChecked(index)}} >Check</button><p style={ {textDecoration: item.checked ? "line-through royalblue 3px" : "none" } }>{item.text}</p><button className='removebtn' onClick={() => {removeItem(index)}}>Remove</button></div>
      ))}
    </div>
  );
}

function App() {
  
  return (
    <div className="App">
      <h1>To do list</h1>
    <AddItems />
    </div>
  );
}

export default App;
