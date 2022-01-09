import React, { useState } from 'react'

export const TaskInput = () => {
    const [input, setInput] = useState('');

    const formHandler = (e) =>{
        e.preventDefault();
        console.log('working');
    }

    
    return (
        <form onSubmit={formHandler} className='taskInput'>
            <input type='text' 
                value={input}
                placeholder='Type your task...' 
               onChange={(e)=>{setInput(e.target.value)}}
            />     
        </form>
    )
}
 