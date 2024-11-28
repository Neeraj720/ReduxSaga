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
      <table class="table table-striped table-dark mt-3">
        <thead>
          <tr>
            <th scope="col" className='text-center'>#</th>
            <th scope="col" className='text-center'>Title</th>
            <th scope="col" className='text-center'>Description</th>
            <th scope="col" className='text-center'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo, index) => {
              return <>
                <tr>
                  <td className='text-center'>{index + 1}</td>
                  <td className='text-center'>
                    {todo?.title}
                  </td>
                  <td className='text-center'>{todo.description}</td>
                  <td className='text-center'>
                    <button className='btn btn-success' onClick={() => handleEdit(todo)}>Edit</button> ||&nbsp;
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