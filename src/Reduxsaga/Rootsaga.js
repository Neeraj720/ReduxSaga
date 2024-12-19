import { all } from "redux-saga/effects";
import allSagas from "./Todo/Sagas";

export function* rootSaga() {
  yield all([allSagas()]);
}
