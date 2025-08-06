import React from "react";

import { FaTrashAlt } from "react-icons/fa";

const List = ({items, handlecheck, handledelete}) => {
    
    
  
 
   return(
   
    <main>
      {(items.length) ? (
        <ul>
           {items.map((item) => (
               <li className="item" key={item.id}>
                  <input type="checkbox" onChange = {()=> handlecheck(item.id)} checked={item.checked} />
                  <label style = {(item.checked)?{textDecoration: 'line-through'} : null} onDoubleClick={() => handlecheck(item.id)}>{item.item}</label>
                  <FaTrashAlt role="button" tabIndex ="0" onClick={() => handledelete(item.id)}/>
               </li>
            ))}
        </ul>
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty</p>
      )}
    </main>
   )
}

export default List;