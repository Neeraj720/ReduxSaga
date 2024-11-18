import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TODO_REQUEST, UPDATE_TODO_REQUEST } from '../Reduxsaga/Todo/Sagaaction'

function Form({currentTodo}) {
  const [formData,setFormData] = useState({
    title:'',
    description:'',
  })
  useEffect(()=>{
    if(currentTodo){
      setFormData({
        title:currentTodo.title,
        description:currentTodo.description
      })
    }
  },[currentTodo])
  const dispatch = useDispatch()
  // handle cahnge
  const handleChange = (e) =>{
      setFormData({...formData,[e.target.name] : e.target.value})
  }
  // handleSubmit
  const handleSubmit = (e) =>{
    e.preventDefault()
    if(currentTodo){
      dispatch({type:UPDATE_TODO_REQUEST,payload:{
        id:currentTodo._id,
        ...formData
      }})
    
    }
    else{
      dispatch({type:ADD_TODO_REQUEST,payload:formData})
    }
    setFormData({
        title:'',
        description:''
      })
  }
  return (
    
    <div className='w-100 d-flex align-items-center justify-content-center mt-3 formSec'>
      <form onSubmit={handleSubmit} action="" className='w-50 d-flex align-items-center justify-content-around flex-column form'>
        <input type="text" class="form-control py-3 mb-3"  placeholder='Enter Title Here'
        name='title'
        value={formData.title}
        onChange={handleChange}
        />
        <textarea rows={"4"} cols={"10"} placeholder='Enter Description Here' className='form-control'
        name='description'
        value={formData.description}
        onChange={handleChange}></textarea>
        <button className='bg-dark text-light fw-semibold form-control py-3 mt-3'>Save</button>
      </form>
    </div>
  )
}

export default Form