import React from 'react'

function ToDo(props) {

  return (
  <li className='toDo-item'>
     <p> {props.text}</p>
   <button onClick={()=>{
     props.removeToDo(props.id)
   }}> <i className='bx bxs-trash'></i></button>
    </li>
  )
}

export default ToDo