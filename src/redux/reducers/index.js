import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import topics from './topicEditReducer'; 

const store = combineReducers({
  user,
  login,
  topics,
});

export default store;
