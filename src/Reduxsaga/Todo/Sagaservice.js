import axios from "axios";
const API_URL = "https://listtimes.onrender.com/api/todo/";

// fetch all todos
export const fetchTodoApi = async () => {
  const response = await axios.get(API_URL);
  return response;
};
// add todos

export const addTodoApi = async (todoData) => {
  const response = await axios.post(API_URL, todoData);
  return response;
};
// delete todos

export const deleteTodoApi = async (id) => {
  const response = await axios.delete(API_URL + id);
  return response;
};

// update todos

export const updateTodoApi = async (todoData) => {
  const { id, ...formData } = todoData;
  console.log("id :", id);
  console.log("formData :", formData);
  const response = await axios.put(API_URL + "/" + id, formData);
  return response;
};
