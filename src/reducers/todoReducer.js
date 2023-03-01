import uuid from 'react-uuid'
import {Delete, Add, Check} from '../type/actionType'

const initState = [
    {
        id:uuid(),
        title:'Play chess',
        isCompleted:false
    },
    {
        id:uuid(),
        title:'Play piano',
        isCompleted:false
    }]

function todoReducer(state=initState,action) {
    const { type, payload } = action

    switch (type) {
        case ( Add ) : {
            const newTodo = {
                id:uuid(),
                title:payload,
                isCompleted:false
            };

            return [...state,newTodo]
        }

        case (Check) : {
            const checkId = payload
            const newTodoList = [...state]
            for (const todo of newTodoList) {
                if (todo.id === checkId){
                    todo.isCompleted = true
                }
            }
            return newTodoList
        }

        case (Delete) : {
            const deleteId = payload
            const newTodoList = [...state]

            for ( let i=0; i<newTodoList.length; i+=1) {
                if (newTodoList[i].id === deleteId) {
                    newTodoList.splice(i,1)
                }
            }
            return newTodoList
        }
    }
    return  state
}

export default todoReducer;
