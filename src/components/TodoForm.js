import React, {useRef} from 'react'
import {Container, FormControl, TextField, Button} from "@mui/material";
import {useDispatch} from 'react-redux'
import {addAction} from '../actions/userActions'

function TodoForm(){
    const dispatch = useDispatch()
    const textInputRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault();
        const title = textInputRef.current.value
        dispatch(addAction(title));
    }

    return (
        <Container component='form' onSubmit={handleSubmit} maxWidth="sm">
                <FormControl fullWidth={true}>
                    <TextField
                        variant="standard"
                        label="I will do this"
                        required={true}
                        style={{marginTop:10}}
                        inputRef={textInputRef}
                    />
                    <Button variant="contained" type="submit" style={{marginTop:10}}>
                        Add to list
                    </Button>
                </FormControl>
        </Container>
    );
}

export default TodoForm;