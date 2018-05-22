import { combineReducers } from 'redux';

//allTopics contains all topics from the database
const allTopics = (state = [], action) => {

    //sets state of allTopics to an array of objects where each object is a topic
    //with the topic text, premise, common ground, published date, archived status,
    //archived summary, and an archived date
    if (action.type === 'SET_ALL_TOPICS'){
        return action.payload
    }

    //if action 'SET_ALL_TOPICS' is not received, state is set to its 
    //default empty array
    return state
}

//allKeyClaims contains all key claims from the database
const allKeyClaims = (state = [], action) => {

    //sets state of allKeyClaims to an array of objects where each object is a key claim
    //with topic id, contributor id, claim text, and order id
    if (action.type === 'SET_ALL_KEY_CLAIMS'){
        return action.payload
    }

    //if action 'SET_ALL_KEY_CLAIMS' is not received, state is set to its 
    //default empty array
    return state
}

//allStreams contains all streams from the database
const allStreams = (state = [], action) => {

    //sets state of allStreams to an array of objects where each object is a stream
    //with key claim id, contributor id, stream text, and evidence text
    if (action.type === 'SET_ALL_STREAMS'){
        return action.payload
    }

    //if action 'SET_ALL_STREAMS' is not received, state is set to its 
    //default empty array
    return state
}

//allContributors contains all contributors from the database
const allContributors = (state = [], action) => {

    //sets state of allContributors to an array of objects where each object is a contributor
    //with their first name, last name, bio, and photo url
    if (action.type === 'SET_ALL_CONTRIBUTORS'){
        return action.payload
    }

    //if action 'SET_ALL_CONTRIBUTORS' is not received, state is set to its 
    //default empty array
    return state
}

//allProposals contains all proposals from the database
const allProposals = (state = [], action) => {

    //sets state of allProposals to an array of objects where each object is a proposal
    //with the topic id, contributor id, and the proposal text
    if (action.type === 'SET_ALL_PROPOSALS'){
        return action.payload
    }

    //if action 'SET_ALL_PROPOSALS' is not received, state is set to its 
    //default empty array
    return state
}

//allLikes contains all likes from the database
const allLikes = (state = [], action) => {

    //sets state of allLikes to an array of objects where each object is a like
    //with the user id and the id of the item liked e.g. key claim id, stream id,
    //id of a comment on a key claim, etc.
    if (action.type === 'SET_ALL_LIKES'){
        return action.payload
    }

    //if action 'SET_ALL_LIKES' is not received, state is set to its 
    //default empty array
    return state
}

//allLoves contains all loves from the database
const allLoves = (state = [], action) => {

    //sets state of allLoves to an array of objects where each object is a love
    //with the user id and the id of the item loved e.g. key claim id, stream id,
    //id of a comment on a key claim, etc.
    if (action.type === 'SET_ALL_LOVES'){
        return action.payload
    }

    //if action 'SET_ALL_LOVES' is not received, state is set to its 
    //default empty array
    return state
}

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
    allTopics,
    allKeyClaims,
    allStreams,
    allContributors,
    allProposals,
    allLikes,
    allLoves,
    featuredTopicPage,
    featuredLandingPage,
    archivedTopics,
    commentsGeneral,
    commentsKeyClaim,
    commentsStream
})