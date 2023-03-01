import React, {useState} from 'react'
import {Container, FormControl, TextField, Button} from "@mui/material";

function TodoForm({addTodo}){
    const [text,setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    }
    return (
        <Container component='form' onSubmit={handleSubmit} maxWidth="sm">
                <FormControl fullWidth={true}>
                    <TextField
                        variant="standard"
                        label="I will do this"
                        required={true}
                        style={{marginTop:10}}
                        onChange={(e) => setText(e.target.value)}
                    />
                    <Button variant="contained" type="submit" style={{marginTop:10}}>
                        Add to list
                    </Button>
                </FormControl>
        </Container>
    );
}

export default TodoForm;