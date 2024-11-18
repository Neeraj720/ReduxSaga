import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_TODO_REQUEST, FETCH_TODO_REQUEST, fetchTodoRequest } from '../Reduxsaga/Todo/Sagaaction'
import Form from './Form'

function TodoList() {
  const dispatch = useDispatch()
  const [editTodo,setEditTodo] = useState(null)
  const { todos } = useSelector((state) => state.todo)
  console.log("todos:", todos)
  useEffect(() => {
    dispatch(fetchTodoRequest({ type: FETCH_TODO_REQUEST }))
  }, [dispatch])
// delete todo
  const handleDelete = (id) => {
    dispatch({ type: DELETE_TODO_REQUEST, payload: id })
  }
  // edit todo
  const handleEdit = (todo) =>{
    setEditTodo(todo)
  }
  console.log("Commit Final")
  return (
    <>
      <Form currentTodo = {editTodo}/>

    {
      todos.length > 0 ?<div className="container mt-3">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => {
              return <>
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    {todo?.title}
                  </td>
                  <td>{todo.description}</td>
                  <td>
                    <button className='btn btn-success' onClick={() => handleEdit(todo)}>Edit</button> ||
                    <button className='btn btn-danger' onClick={() => handleDelete(todo._id)}>Delete</button>
                  </td>
                </tr>
              </>
            })
          }
        </tbody>
      </table>
    </div>  : <div className='text-center mt-3' >
          <h1>There is no item in list</h1>
    </div>
    }
      
    </>
  )
}


export default TodoList