import React from 'react'
import {Card, CardContent, Container, IconButton, Typography} from "@mui/material";
import {Delete, Check} from '@mui/icons-material';
import {deleteAction,checkAction} from "../actions/userActions";
import {useDispatch} from "react-redux";

function Todo({todo}){
    const todoStyle = todo.isCompleted? {textDecoration:'line-through'}
        : {textDecoration: 'none'};
    const dispatch = useDispatch();

    return (
        <Container>
            <Card
                variant='outlined'
                style={{marginTop:30, background:'lightgray'}}>
                <CardContent>
                    <Typography variant="h5" component="h2" style={todoStyle}>
                        <IconButton
                            style={{color:'green'}}
                            onClick={() => dispatch(checkAction(todo.id))}>
                            <Check/>
                        </IconButton>
                        {todo.title}
                        <IconButton
                            style={{color:'red', float:'right'}}
                            onClick={() => dispatch(deleteAction(todo.id)) }>
                            <Delete/>
                        </IconButton>
                    </Typography>
                </CardContent>
            </Card>

        </Container>
    )

}

export default  Todo;