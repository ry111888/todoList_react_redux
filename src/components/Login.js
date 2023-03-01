import {Box, Button, Container, TextField} from '@mui/material';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginAction} from "../actions/logActions";
import {useRef} from "react";

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const text = useRef(null)

    const handleClick = () => {
        const username = text.current.value
        dispatch(loginAction(username))
        navigate('/todo')
    }

    return (
        <Box>
        <Container style={
            {
                width:250,
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                marginTop:200
            }
        }>
            <TextField
                inputRef={text}
                variant='outlined'
                label='username'
                required={true}
            />
            <Button variant='contained' onClick={handleClick} style={{marginTop:15}}>
                Log in
            </Button>
        </Container>
        </Box>
    )
}

export default  Login;