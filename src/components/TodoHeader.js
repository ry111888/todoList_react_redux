import {Box, IconButton, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import LogoutIcon from '@mui/icons-material/Logout'
import {useNavigate} from "react-router-dom";
import {logoutAction} from "../actions/logActions";

function TodoHeader() {
    const username = useSelector (state => state.user.name)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(logoutAction())
        navigate('/')
    }

    return (
        <Box style={{
            display:'flex'
        }}>
            <Typography style={{
                marginTop:15,
                fontSize: 30,
                marginLeft: 15
            }}>
                Hi,{username}
            </Typography>
            <IconButton onClick={handleClick} style={{
                marginTop:15,
                marginLeft: 10
            }}>
                <LogoutIcon/>
            </IconButton>
        </Box>
    )
}

export default TodoHeader;