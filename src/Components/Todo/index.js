import { useState, useEffect } from 'react';
import './index.css'
import TodoItem from '../TodoItem'

const Todo = () => {
    const [inputValue, setInputValue] = useState('');
    const [item, setItem] =  useState([])
    
   

    useEffect(() => {
        // Fetch to-dos when component mounts
        const fetchTodos = async () => {
          try {
            const response = await fetch('http://localhost:3000/todos', {
              headers: {
                'x-auth-token': localStorage.getItem('token'),
              },
            });
            if (response.ok) {
              const data = await response.json();
              setItem(data);
            } else {
              console.error('Failed to fetch to-dos');
            }
          } catch (error) {
            console.error('Fetch error:', error);
          }
        };
    
        fetchTodos();
      }, []);




const handelItem = async(event) =>{
 
if (event.key === "Enter"){
    if (event.key === 'Enter') {
        try {
          const response = await fetch('http://localhost:3000/todos', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-auth-token': localStorage.getItem('token'),
            },
            body: JSON.stringify({ description: event.target.value }),
          });
  
          if (response.ok) {
            const newItem = await response.json();
            setItem([...item, { id: newItem.id, title: event.target.value }]);
            setInputValue('');
          } else {
            console.error('Failed to add to-do');
          }
        } catch (error) {
          console.error('Add to-do error:', error);
        }
      }
    }
}


   
const handleDelete = async(itemToDelete) => {
 
    try {
        const response = await fetch(`http://localhost:3000/todos/${itemToDelete.id}`, {
          method: 'DELETE',
          headers: {
            'x-auth-token': localStorage.getItem('token'),
          },
        });
  
        if (response.ok) {
          setItem(item.filter(item => item !== itemToDelete));
        } else {
          console.error('Failed to delete to-do');
        }
      } catch (error) {
        console.error('Delete to-do error:', error);
      }


}
    

const handleEdit = async(itemToEdit, newTitle) => {

    try {
        const response = await fetch(`http://localhost:3000/todos/${itemToEdit.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'x-auth-token': localStorage.getItem('token'),
          },
          body: JSON.stringify({ description: newTitle, status: itemToEdit.status }),
        });
  
        if (response.ok) {
          setItem(item.map(item =>
            item.id === itemToEdit.id ? { ...item, title: newTitle } : item
          ));
        } else {
          console.error('Failed to update to-do');
        }
      } catch (error) {
        console.error('Update to-do error:', error);
      }

}


  return (

    <div className='container'>

     <div className='sub-container'>
     <h1 className='heading'>TODO-ITEMS</h1>
     <div >
     <input type='text' className='input-todo' 
      value={inputValue}
     
     onChange={(e) => setInputValue(e.target.value)}
     placeholder='Enter your item' onKeyDown={handelItem}/>
    <ul className='list-container'>
    {
      
      item.map((item)=>
        <TodoItem
        key={item.id}
        itemDetails ={item}
        onDelete={handleDelete}
        onEdit = {handleEdit}
        />)}
    </ul>

     </div>

     </div>



    </div>
  )
}

export default Todo
