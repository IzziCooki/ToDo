import React, {useState, useEffect} from 'react';



export const EditForm = ({id, content})=>{

    const [newTodo, setNewTodo] = useState([])


    return(
    <>
        <form onSubmit={console.log("Hit Submit")}>
            <input type="text" placeholder={content}></input>
            <button type='submit'>Save</button>
            <button type='reset'>Reset</button>
        </form>

    </>)
    }