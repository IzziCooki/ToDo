import React from 'react';
import { useHistory } from 'react-router-dom';

export const Delete = ( {id} ) => {
    let history = useHistory();
    const deleteTodo = ()=>{
        fetch('/api/delete/' + id.toString(),{
            method: 'POST',
            body: JSON.stringify({
                id: id
            })
        }).then(response => response.json())
        .then(data => {
            console.log(data)
            history.push("/")
        })

    }

    return ( 
        <>
        <button onClick={deleteTodo}>Delete</button>
        </>
    )
}