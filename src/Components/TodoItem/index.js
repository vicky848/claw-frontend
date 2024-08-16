import React from 'react';
import { FaTrash , FaEdit} from 'react-icons/fa';
import './index.css'
const TodoItem = (props) => {

    const  {itemDetails, onDelete, onEdit} = props

    const { title} = itemDetails

    const handleDelete = () => {
      onDelete(itemDetails)
    }

    const handleEdit = () => {
      onEdit(itemDetails)
    }

  return (
    <div className='card-container'>
        <li className='card'>
            <h1 className='title'>{title}</h1>
          
           <div className='button-container'>
           <button className='button' onClick={handleDelete}>
           <FaTrash className='delete-icon'/>
            </button>
            <button className='button' onClick={handleEdit}>
           <FaEdit className='edit-icon'/>
            </button>
           
           </div>
           </li>


        </div>
    
  )
}

export default TodoItem
