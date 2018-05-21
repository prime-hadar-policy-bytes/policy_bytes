import { combineReducers } from 'redux';

const newTopic = (state = [], action) => {

    //sets state of newTopic to an array of objects where
    //each object is a section of the topic edit page e.g. one object would be the Topic Title,
    //another object would be Topic Summary, etc.
    if (action.type === 'SET_NEW_FEATURED_TOPIC'){
        return action.payload
    }
    return state
}

export default combineReducers({
    newTopic
})