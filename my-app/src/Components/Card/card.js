import React from 'react';
import {Link} from 'react-router-dom';
import Chip from '@material-ui/core/Chip';

export const Card = ({ listOfTodos })=>{

    return (
        <>
        {listOfTodos.map(todo =>{
            var id = todo.id;
            return (
            <ul key={todo.id}>
                <li> 
                   <Link to={todo.id.toString()}>{todo.content} 
                   </Link> 

                </li>
            </ul>
                )
            })}

        </>


    )

}