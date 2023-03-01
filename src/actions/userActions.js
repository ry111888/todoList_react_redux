import {Delete, Add, Check} from '../type/actionType'

export const deleteAction = (id) => ({type:Delete, payload:id})
export const addAction = (title) => ({type:Add, payload: title})
export const checkAction = (id) => ({type:Check, payload:id})
