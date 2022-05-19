import React, { useState } from 'react';
import './App.css';
import ToDo from './Components/ToDo';

function App() {

  const[inputList, setInputList] = useState('')
  const[items, setItems] = useState([])

  const itemEvent=(e)=>{
    setInputList(e.target.value);
  }

  const listOfItems=(e)=>{
    setItems((oldItems)=>{
      return[...oldItems,inputList];
    })
    setInputList('')
  }

  const removeToDo =(id)=>{
    setItems((oldItems)=>{
      return oldItems.filter((el ,idx)=>{
        return idx!==id
      })
    })
  }

  return (
    <div className="App">
      <h1>Oygul's to do app</h1>
      <input className='toDo-input' type="text" placeholder='Add item' onChange={itemEvent} value={inputList}/>  
      <button className='toDo-btn' onClick={listOfItems}>Add</button>
      <ul>
        {items.map((el,i)=>{
          return(
            <ToDo id={i} text={el} key={i} removeToDo={removeToDo}/>
          )
        })}

      </ul>
    </div>
  );
}

export default App;
