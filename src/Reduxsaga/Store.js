// import { applyMiddleware,createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
// import { rootSaga } from "./Rootsaga";
// import rootReducer from './CombineReducer'

// const sagaMiddelware = createSagaMiddleware()

// const store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddelware)
// )

// sagaMiddelware.run(rootSaga)
// export default store


import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from './CombineReducer'
import { rootSaga } from "./Rootsaga";

const sagaMiddelware = createSagaMiddleware();

const store = configureStore(
    {
        reducer:rootReducer,
        middleware:(getDefaultMiddleware)=> getDefaultMiddleware({thunk:false}).concat(sagaMiddelware)
    }
)
sagaMiddelware.run(rootSaga)

export default store