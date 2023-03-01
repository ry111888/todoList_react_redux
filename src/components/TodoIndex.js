import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {Box} from "@mui/material";
import TodoHeader from "./TodoHeader";

function TodoIndex() {
    return (
        <Box>
            <TodoHeader/>
            <TodoForm/>
            <TodoList/>
        </Box>
    )
}

export default TodoIndex;