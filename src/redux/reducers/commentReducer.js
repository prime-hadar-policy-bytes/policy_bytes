import { combineReducers } from 'redux';

//commentsGeneral contains all comments based on topic id that were not direct comments
//to key claims or any claim of a stream
const commentsGeneral = (state = [], action) => {

    //sets state of commentsGeneral to an array of objects where those objects are comments
    //and the user id and topic id of those comments
    if(action.type === 'SET_GENERAL_COMMENTS'){
        return action.payload
    }

    //if action 'SET_GENERAL_COMMENTS' is not received, state is set to its default empty array
    return state
}

//commentsKeyClaim contains all comments for a given key claim based on the topic id
const commentsKeyClaim = (state = [], action) => {

    //sets state of commentsKeyClaim to an array of objects where those objects are the
    //text, the user id, topic id, and key claim id of those comments
    if(action.type === 'SET_KEY_CLAIM_COMMENTS'){
        return action.payload
    }

    //if action 'SET_KEY_CLAIM_COMMENTS' is not received, state is set to its default empty array
    return state
}

//commentsKeyClaim contains all comments for a given key claim based on the topic id
const commentsStream = (state = [], action) => {

    //sets state of commentsStream to an array of objects where those objects are the
    //text, the user id, topic id, and stream id of those comments
    if(action.type === 'SET_STREAM_COMMENTS'){
        return action.payload
    }

    //if action 'SET_STREAM_COMMENTS' is not received, state is set to its default empty array
    return state
}

export default combineReducers({
    commentsGeneral,
    commentsKeyClaim,
    commentsStream
})