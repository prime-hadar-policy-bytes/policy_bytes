import { combineReducers } from 'redux';

const newTopic = (state = [], action) => {

    //sets state of newTopic to an array of objects where
    //each object is a section of the topic edit page e.g. one object would be the Topic Title,
    //another object would be Topic Summary, etc.
    if (action.type === 'SET_NEW_FEATURED_TOPIC'){
        return action.payload
    }

    //if action 'SET_NEW_FEATURED_TOPIC' is not received, state is set to its default empty array
    return state
}

const archivedTopics = (state = [], action) => {

    //sets state of archivedTopics to an array of objects where those objects are all archived topics
    if(action.type === 'SET_ARCHIVED_TOPICS'){
        return action.payload
    }

    //if action 'SET_ARCHIVED_TOPCS' is not received, state is set to its default empty array
    return state
}

export default combineReducers({
    newTopic,
    archivedTopics
})