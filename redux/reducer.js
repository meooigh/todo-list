import {SET_TASK, SET_TASK_ID, DEL_TASK} from './action'

export const initialState ={
    tasks: [],
    tasksID: 0
}

function reducer(state = initialState, action){
    switch(action.type){
        case SET_TASK:
            return {
                ...state,
                tasks: action.payload
            }
        case SET_TASK_ID:
            return {
                ...state,
                tasksID: action.payload
            }
        case DEL_TASK:
            let newTask = [...state.tasks]
            newTask.splice(action.payload - 1, 1)
            return {
                tasks: newTask
            }
        default:
            return state
    }
}
export default reducer