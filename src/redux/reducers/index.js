import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import topics from './topicEditReducer'; 
import cacheEdit from './atticusTopicEditReducer'

const store = combineReducers({
  user,
  login,
  topics,
  cacheEdit
});

export default store;
