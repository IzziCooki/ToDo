import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';



export const EditForm = ({ content, userInput, onFormChange, onFormSubmit})=>{

    const [data, setData] = useState('')
    const [updated, setUp] = useState('Save to Update Changes')
    const { id } = useParams()
   

    const handleSubmit = (event) => {
        event.preventDefault();
        setData(event.target[0].value)
        console.log(data)
        handleFormSubmit(data)

      }

    const handleChange = (event) =>{
            //event.target.value is the input from the form
            //console.log(event.target.value)
            setData(event.target.value)

    }



    const handleFormSubmit = (data) => {
        fetch('api/edit/' + id, {

            method: "POST",
            body: JSON.stringify({
                content:data
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
                'Accept': 'application/json'
            }
        }).then(response => response.json())
          .then(message => {
              console.log(message)
              
              setUp("Task Updated!")


            })
        }


    return(
    <>
        <form onSubmit={handleSubmit} autoComplete={'off'}>
            <TextField id="standard-full-width"
            label={"Todo"}
            style={{ margin: 8 }}
            helperText={updated}
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true,}} type="text" placeholder={content.toString()}  onChange={handleChange}></TextField>

            <Button type='submit' variant="contained" color="primary" >Save</Button>
            <Button type='reset' variant="contained" color="primary" >Reset</Button>
        </form>

    </>)
    }