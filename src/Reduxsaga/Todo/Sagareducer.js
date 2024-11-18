import { ADD_TODO_FAILURE, ADD_TODO_REQUEST, ADD_TODO_SUCCESS, DELETE_TODO_FAILURE, DELETE_TODO_REQUEST, DELETE_TODO_SUCCESS, FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, UPDATE_TODO_FAILURE, UPDATE_TODO_REQUEST, UPDATE_TODO_SUCCESS } from "./Sagaaction"

const initialState = {
    todos:[],
    loading:false,
    error:null
}


const todoReducer = (state = initialState,action)=>{
    switch(action.type){
        // get all Todos
        case FETCH_TODO_REQUEST:
            return{...state,loading:true}
        case FETCH_TODO_SUCCESS:
            return{
                ...state,
                todos:action.payload,
                loading:false
            } 
        case FETCH_TODO_FAILURE:
            return{
                ...state,
                loading:false,
                error:action.payload
            }  

        // add todos
        case ADD_TODO_REQUEST:
            return{
                ...state,
                loading:true
            }
        case ADD_TODO_SUCCESS:
            return{
                ...state,
                loading:false,
                todos:[...state.todos,action.payload]
            }  
        case ADD_TODO_FAILURE:
            return {
                ...state,
                loading:false,
                error:action.payload
            }  
               // Delete Todos
    case DELETE_TODO_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case DELETE_TODO_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
        };
      case DELETE_TODO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        }; 
        // upadate todos
        case UPDATE_TODO_REQUEST:
            return {
              ...state,
              loading: true,
              error: null,
            };
          case UPDATE_TODO_SUCCESS:
            return {
              ...state,
              loading: false,
              error: null,
            };
          case UPDATE_TODO_FAILURE:
            return {
              ...state,
              loading: false,
              error: action.payload,
            }; 
        default:{
            return{
                ...state
            }
        }         
    }
}

export default todoReducer