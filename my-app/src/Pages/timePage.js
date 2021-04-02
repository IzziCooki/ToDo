import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { Delete } from "../Components/Delete/delete";

export const Date = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState([])

    return (id)
    
}