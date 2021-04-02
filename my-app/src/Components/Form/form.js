import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Form = ({userInput, onFormChange, onFormSubmit})=>{

    const handleChange = (event) =>{

           onFormChange(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }


    return(
    <>
        <form onSubmit={handleSubmit}>
            <TextField id="standard-full-width"
            
            style={{ margin: 8 }}
            helperText='Add Todo'
            fullWidth
            margin="normal"
            InputLabelProps={{ shrink: true,}} type="text" required value={userInput} onChange={handleChange} autoComplete={'off'} ></TextField>
            <Button type='submit'variant="contained" color="primary">Submit</Button>
        </form>

    </>)
    }