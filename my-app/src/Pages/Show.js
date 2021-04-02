import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Delete } from "../Components/Delete/delete";
import { EditForm } from "../Components/Form/editForm";

export const Show = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])
    const [addTodo, setAddTodo] = useState('')
    
    
    useEffect(()=>  {
        fetch('/api/' + id)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [id])

    const content = todo.length > 0 && todo.map(data => data.content)
    const done = todo.length > 0 && todo.map(data => data.done)

    // Gets the data and sets to variable content 
    //{todo.length > 0 && todo.map(data => <div key={id}>{data.content}</div>)}


    return( 
        <div>
            <EditForm id={id} content={content}/>
            <hr></hr>
            <Delete id={id}/>
            <hr></hr>
            
            <hr></hr>
            <div>
            <Link to={"/"}>Back To Todos</Link>
            </div>
        </div>
            )
}