import { fork, takeEvery, all, call, put } from "redux-saga/effects";
import AuthClient from "../../lib/auth-client";
import { authActionTypes } from "./types";
import { signupWithoutPassFailure, signupWithoutPassSuccess } from "./actions";

function* signUpWithoutPassword(action: any): any {
  console.log("action", action, AuthClient.signupWithoutPassword);
  try {
    const auth = yield call(AuthClient.signupWithoutPassword, action.req);
    yield put(signupWithoutPassSuccess(auth));
  } catch (error) {
    yield put(signupWithoutPassFailure(error));
  }
}

function* signupWithoutPasswordRootSaga() {
  yield all([
    takeEvery(
      authActionTypes.SIGN_UP_WITHOUT_PASSWORD_REQUEST,
      signUpWithoutPassword
    )
  ]);
}

const authSagas = [fork(signupWithoutPasswordRootSaga)];

export default authSagas;
