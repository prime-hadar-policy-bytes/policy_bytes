import { all } from 'redux-saga/effects';
import userSaga from './userSaga';
import loginSaga from './loginSaga';
import topicSaga from './topicSaga';
import commentSaga from './commentSaga';


export default function* rootSaga() {
  yield all([
    userSaga(),
    loginSaga(),
    commentSaga(),
    topicSaga()
    // watchIncrementAsync()
  ]);
}
