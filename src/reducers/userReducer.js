import {Login,Logout} from '../type/actionType'

const initState = { name : ''}
function userReducer(state=initState, action){
    const {type, payload} = action
    switch (type) {
        case (Login) : {
            return { ...state, name : payload}
        }

        case (Logout) : {
            return { ...state, initState}
        }
    }

    return state

}

export default userReducer;

