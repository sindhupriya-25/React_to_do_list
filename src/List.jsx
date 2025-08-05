import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const List = () => {
    
    
   const [items, setItems] = useState([
         { id: 1, 
           item: "Practice React",
           checked :false
        },
         { id: 2, 
           item: "Play cricket" ,
           checked :true
        },
         { id: 3, 
           item: "Read a book" , 
           checked :true
        }
   ]);

 const handlecheck = (id) => {
   const listItems = items.map((item) =>
      item.id ===id ?{...item, checked:!item.checked} :item)      
   setItems(listItems);
   localStorage.setItem("todo_list", JSON.stringify(listItems));

 }
 const handledelete = (id) => {
   const listItems = items.filter((item) => item.id !== id);
   setItems(listItems);
   localStorage.setItem("todo_list", JSON.stringify(listItems));
 }
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