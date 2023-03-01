import {Login, Logout} from '../type/actionType';

export const loginAction = (username) => ({ type:Login, payload:username })
export const logoutAction = () => ({ type:Logout, payload: null })