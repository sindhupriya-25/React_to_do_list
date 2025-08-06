import React from 'react';


const AddItem = ({newItem,setNewItem,handlesubmit}) => {
    return (
        <form className='addForm' onSubmit={handlesubmit}>
            <label htmlFor='addItem'>Add Item</label>
            <input 
                autoFocus 
                id='addItem' 
                type='text' 
                placeholder='Add Item' 
                required 
                value = {newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button type='submit' aria-label='Add Item'>
                Add
            </button>
            
        </form>
    );
};

export default AddItem;
