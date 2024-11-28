export const FETCH_TODO_REQUEST ="FETCH_TODO_REQUEST"
export const FETCH_TODO_SUCCESS ="FETCH_TODO_SUCCESS"
export const FETCH_TODO_FAILURE ="FETCH_TODO_FAILURE"

// add Todo

export const ADD_TODO_REQUEST = "ADD_TODO_REQUEST"
export const ADD_TODO_SUCCESS = "ADD_TODO_SUCCESS"
export const ADD_TODO_FAILURE = "ADD_TODO_FAILURE"
// delete Todo

export const DELETE_TODO_REQUEST = "DELETE_TODO_REQUEST"
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS"
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE"

// Update todo

export const UPDATE_TODO_REQUEST = "UPDATE_TODO_REQUEST"
export const UPDATE_TODO_SUCCESS = "UPDATE_TODO_SUCCESS"
export const UPDATE_TODO_FAILURE = "UPDATE_TODO_FAILURE"

// GET TODOS
export const fetchTodoRequest = () =>({type:FETCH_TODO_REQUEST})
export const fetchTodoSuccess = (todos) =>({type:FETCH_TODO_SUCCESS,payload:todos})
export const fetchTodoFailure = (error) =>({type:FETCH_TODO_FAILURE,payload:error})

// ADD TODOS
export const addTodoRequest = (todo) =>({type:ADD_TODO_REQUEST,payload:todo})
export const addTodoSuccess = (todo) =>({type:ADD_TODO_SUCCESS,payload:todo})
export const addTodoFailure = (error) =>({type:ADD_TODO_FAILURE,payload:error})

// DELETE TODO

export const deleteTodoRequest = (id) =>({type:DELETE_TODO_REQUEST,payload:id})
export const deleteTodoSuccess = (id) =>({type:DELETE_TODO_SUCCESS,payload:id})
export const deleteTodoFailure = (id) =>({type:DELETE_TODO_FAILURE,payload:id})

// UPDATE TODO

export const updateTodoRequest = (todo) =>({type:DELETE_TODO_REQUEST,payload:todo})
export const updateTodoSuccess = (todo) =>({type:DELETE_TODO_SUCCESS,payload:todo})
export const updateTodoFailure = (todo) =>({type:DELETE_TODO_FAILURE,payload:todo})


// export const loginRequest = "Login_Action_Request"
// export const loginSuccess = "Login_Action_Success"
// export const loginFailure = "Login_Action_Failure"