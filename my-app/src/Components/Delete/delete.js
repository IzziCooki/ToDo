import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';


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

        <Button variant="contained" color="secondary" onClick={deleteTodo}>Delete</Button>
        </>
    )
}