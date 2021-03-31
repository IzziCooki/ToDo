import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Delete } from "../Components/Delete/delete";

export const Edit = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])
    
    useEffect(()=>  {
        fetch('/api/' + id)
        .then(res => res.json())
        .then(data => setTodo(data))
    }, [id])

    return( 
        <div>
            {todo.length > 0 && todo.map(data => <div key={id}>{data.content}</div>)}
            <Delete id={id} /> <button id={id}>Edit</button>
            <hr></hr>
            <Link to={"/"}>Back To Todos</Link>
        </div>
            )
}