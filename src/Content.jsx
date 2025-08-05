import React from "react";
import { useState } from "react";

const Content = () => {
    
    const [name, setName] = useState("John");
   function handleNameChange(){
    const names = ["Alice", "Bob", "Charlie"];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]) ;
   }
   
    const [count, setCount] = useState(99);
   function incrementFunction() {
    setCount(count + 1);
   }
   function decrementFunction() {
    setCount(count - 1);
   }
   const [items, setItems] = useState([
         { id: 1, 
           item: "Practice React",
           checked :true
        },
         { id: 1, 
           item: "Play cricket" ,
           checked :true
        },
         { id: 1, 
           item: "Read a book" , 
           checked :true
        }
   ]);
   return(
   
    <main>
        <p>lets {name} money</p>
        <button onClick={handleNameChange}>Change Name</button>
        <br></br>
        <button onClick={decrementFunction}>-</button>
        <span>{count}</span>
        <button onClick={incrementFunction}>+</button>
    </main>
   )
}

export default Content;