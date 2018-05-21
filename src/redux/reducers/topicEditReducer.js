import { combineReducers } from 'redux';

//featuredTopicPage contains the information needed for the featured topic
//on the Topic Page
const featuredTopicPage = (state = [], action) => {

    //sets state of featuredTopicPage to an array of objects where each object is a section
    //of the topic edit page e.g. one object would be the Topic Title, another
    //object would be Topic Summary, etc.
    if (action.type === 'SET_FEATURED_TOPIC_TOPIC_PAGE'){
        return action.payload
    }

    //if action 'SET_FEATURED_TOPIC_TOPIC_PAGE' is not received, state is set to its 
    //default empty array
    return state
}

//featuredLandingPage contains the information needed to display the featured topic
//the featured topic on the landing page
const featuredLandingPage = (state = [], action) => {

    //sets state of featuredLandingPage to an array of objects where each object is a section
    //of the featured topic on the landing page e.g. contributor names, contributor bios, etc.
    if(action.type === 'SET_FEATURED_TOPIC_LANDING_PAGE'){
        return action.paylod
    }

    //if action 'SET_FEATURED_TOPIC_LANDING_PAGE' is not received, state is set to its 
    //default empty array
    return state
}

//archivedTopics contains all of the archived topics from the database
const archivedTopics = (state = [], action) => {

    //sets state of archivedTopics to an array of objects where those objects are 
    //all archived topics
    if(action.type === 'SET_ARCHIVED_TOPICS'){
        return action.payload
    }

    //if action 'SET_ARCHIVED_TOPCS' is not received, state is set to its default 
    //empty array
    return state
} 

//commentsGeneral contains all comments that were not direct comments to key claims 
//or any claim of a stream
const commentsGeneral = (state = [], action) => {

    //sets state of comments to an array of objects where those objects are comments
    //and the user id and topic id of those comments
    if(action.type === 'SET_GENERAL_COMMENTS'){
        return action.payload
    }

    //if action 'SET_COMMENTS' is not received, state is set to its default empty array
    return state
}

export default combineReducers({
    featuredTopicPage,
    featuredLandingPage,
    archivedTopics,
    commentsGeneral
})