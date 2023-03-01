import React from 'react'
import {Card, CardContent, Container, IconButton, Typography} from "@mui/material";
import {Delete, Check} from '@mui/icons-material';

function Todo({title,checkTodo,deleteTodo,id,isCompleted}){
    const todoStyle = isCompleted? {textDecoration:'line-through'}
        : {textDecoration: 'none'};
    return (
        <Container>
            <Card
                variant='outlined'
                style={{marginTop:30, background:'lightgray'}}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton
                            style={{color:'green'}}
                            onClick={() => checkTodo(id)}>
                            <Check/>
                        </IconButton>
                        {title}
                        <IconButton
                            style={{color:'red', float:'right'}}
                            onClick={() => deleteTodo(id)}>
                            <Delete/>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>

        </Container>
    )

}

export default  Todo;