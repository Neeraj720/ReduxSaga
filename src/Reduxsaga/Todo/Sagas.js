import { put, takeLatest, call } from "redux-saga/effects";
import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
  DELETE_TODO_REQUEST,
  DELETE_TODO_SUCCESS,
  FETCH_TODO_FAILURE,
  FETCH_TODO_REQUEST,
  FETCH_TODO_SUCCESS,
  UPDATE_TODO_FAILURE,
  UPDATE_TODO_REQUEST,
  UPDATE_TODO_SUCCESS,
} from "./Sagaaction";
import {
  addTodoApi,
  deleteTodoApi,
  fetchTodoApi,
  updateTodoApi,
} from "./Sagaservice";

// FETCH TODO SAGA
function* fetchTodoSaga() {
  try {
    const response = yield call(fetchTodoApi);
    console.log(response.data, "response");
    yield put({ type: FETCH_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_TODO_FAILURE, payload: error.message });
  }
}
// ADD TODO SAGA
function* addTodoSaga(action) {
  try {
    console.log("action", action);
    const response = yield call(addTodoApi, action.payload);
    yield put({ type: ADD_TODO_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: ADD_TODO_FAILURE, payload: error.message });
  }
}
// DELETE TODO SAGA
function* deleteTodoSaga(action) {
  try {
    const response = yield call(deleteTodoApi, action.payload);
    yield put({ type: DELETE_TODO_SUCCESS, payload: response });
    yield call(fetchTodoSaga);
  } catch (error) {
    yield put({ type: DELETE_TODO_FAILURE, payload: error.message });
  }
}
// Update todo saga

function* updateTodoSaga(action) {
  try {
    //   console.log(action ,"saga")
    const response = yield call(updateTodoApi, action.payload);
    yield put({ type: UPDATE_TODO_SUCCESS, payload: response.data });
    yield call(fetchTodoSaga);
  } catch (error) {
    yield put({ type: UPDATE_TODO_FAILURE, payload: error.message });
  }
}
export default function* allSagas() {
  yield takeLatest(FETCH_TODO_REQUEST, fetchTodoSaga);
  yield takeLatest(ADD_TODO_REQUEST, addTodoSaga);
  yield takeLatest(DELETE_TODO_REQUEST, deleteTodoSaga);
  yield takeLatest(UPDATE_TODO_REQUEST, updateTodoSaga);
}
