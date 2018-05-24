import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios'

//gets all topics from database
function* fetchAllTopics(action){
    try{

        //topicResponse sends get request to router '/api/topic/alltopics' and 
        //receives back all topics from the database and stores them in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/alltopics')

        //sends all topics to allTopics reducer via action 'SET_ALL_TOPICS'
        //and payload topicResponse.data
        yield put({
            type: 'SET_ALL_TOPICS',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topics: ', error);
    }
}

//gets all key claims from database
function* fetchAllKeyClaims(action){
    try{

        //keyClaimResponse sends get request to router '/api/topic/allkeyclaims' and 
        //receives back all key claims from the database and stores them in keyClaimResponse.data
        const keyClaimResponse = yield call(axios.get, '/api/topic/allkeyclaims')

        //sends all key claims to allKeyClaims reducer via action 'SET_ALL_KEY_CLAIMS'
        //and payload keyClaimResponse.data
        yield put({
            type: 'SET_ALL_KEY_CLAIMS',
            payload: keyClaimResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting key claims: ', error);
    }
}

//gets all streams from database
function* fetchAllStreams(action){
    try{

        //streamResponse sends get request to router '/api/topic/allstreams' and 
        //receives back all streams from the database and stores them in streamResponse.data
        const streamResponse = yield call(axios.get, '/api/topic/allstreams')

        //sends all streams to allStreams reducer via action 'SET_ALL_STREAMS'
        //and payload streamResponse.data
        yield put({
            type: 'SET_ALL_STREAMS',
            payload: streamResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting streams: ', error);
    }
}

//gets all contributors from database
function* fetchAllContributors(action){
    try{

        //contributorResponse sends get request to router '/api/topic/allcontributors' and 
        //receives back all contributors from the database and stores them in contributorResponse.data
        const contributorResponse = yield call(axios.get, '/api/topic/allcontributors')

        //sends all contributors to allContributors reducer via action 'SET_ALL_CONTRIBUTORS'
        //and payload contributorResponse.data
        yield put({
            type: 'SET_ALL_CONTRIBUTORS',
            payload: contributorResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting contributors: ', error);
    }
}

//gets all proposals from database
function* fetchAllProposals(action){
    try{

        //proposalResponse sends get request to router '/api/topic/allproposals' and 
        //receives back all proposals from the database and stores them in proposalResponse.data
        const proposalResponse = yield call(axios.get, '/api/topic/allproposals')

        //sends all proposals to allProposals reducer via action 'SET_ALL_PROPOSALS'
        //and payload proposalResponse.data
        yield put({
            type: 'SET_ALL_PROPOSALS',
            payload: proposalResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting proposals: ', error);
    }
}

//gets all likes from database
function* fetchAllLikes(action){
    try{

        //likeResponse sends get request to router '/api/topic/alllikes' and 
        //receives back all likes from the database and stores them in likeResponse.data
        const likeResponse = yield call(axios.get, '/api/topic/alllikes')

        //sends all likes to allLikes reducer via action 'SET_ALL_LIKES'
        //and payload likeResponse.data
        yield put({
            type: 'SET_ALL_LIKES',
            payload: likeResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting likes: ', error);
    }
}

//gets all loves from database
function* fetchAllLoves(action){
    try{

        //loveResponse sends get request to router '/api/topic/allloves' and 
        //receives back all loves from the database and stores them in loveResponse.data
        const loveResponse = yield call(axios.get, '/api/topic/allloves')

        //sends all likes to allLikes reducer via action 'SET_ALL_LOVES'
        //and payload loveResponse.data
        yield put({
            type: 'SET_ALL_LOVES',
            payload: loveResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting loves: ', error);
    }
}

//gets the featured topic to be displayed on the topic page from the database
function* fetchFeaturedTopicPage(action){
    try{

        //topicResponse sends get request to router '/api/topic/featuredtopic' and 
        //receives back the topic admin wants to be the featured topic for the topic
        //page and stores it in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/featuredtopic')

        //sends new featured topic to featuredTopicPage reducer via action 'SET_FEATURED_TOPIC_TOPIC_PAGE'
        //and payload topicResponse.data
        yield put({
            type: 'SET_FEATURED_TOPIC_TOPIC_PAGE',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
    }
}

//gets the featured topic to be displayed on the landing page from the database
function* fetchFeaturedTopicLanding(action){
    try{

        //topicResponse sends get request to router '/api/topic/featuredlanding' and 
        //receives back the topic admin wants to be the featured topic on the landing
        //page and stores it in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/featuredlanding')

        //sends new featured topic to featuredLandingPage reducer via action 'SET_NEW_FEATURED_TOPIC'
        //and payload topicResponse.data
        yield put({
            type: 'SET_FEATURED_TOPIC_LANDING_PAGE',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
    }
}

//gets all of the archived topics for displaying them on the landing page
function* fetchArchivedTopics(action){
    try{

        //archivedResponse sends get request to router '/api/topic/archived' and 
        //receives back all archived topics and store them in archivedResponse.data
        const archivedResponse = yield call(axios.get, '/api/topic/archived')

        //sends all archived topics to archivedTopics reducer via action 'SET_ARCHIVED_TOPICS'
        //and payload archivedResponse.data
        yield put({
            type: 'SET_ARCHIVED_TOPICS',
            payload: archivedResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting archived topics: ', error);
    }
}

//posts a new topic to the database
function* setNewTopic(action){
    try{

        //posts new topic to the database via axios.post
        //action.payload contains the new topic
        yield call(axios.post, '/api/topic/newtopic', action.payload)

    //if there is an error in sending post request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in posting new topic: ', error);
    }
}

//WRITTEN BY ATTICUS
function* togglePublishedSaga(action) {
    try {
        yield call (axios.put, '/api/topic/togglePublished', action.payload)
        yield put ({
            type: 'FETCH_ALL_TOPICS'
        })
    } catch (error) {
        console.log('Error togglePublishedSaga: ', error)
    }
}

//WRITTEN BY ATTICUS
function* toggleFeaturedSaga(action) {
    try {
        yield call (axios.put, '/api/topic/toggleFeatured', action.payload)
        yield put ({
            type: 'FETCH_ALL_TOPICS'
        })
    } catch (error) {
        console.log('Error toggleFeaturedSaga: ', error)
    }
}

function* deleteTopicSaga(action) {
    try {
        yield call (axios.delete, `/api/topic/deleteTopic/${action.payload}`);
        yield put ({
            type: 'FETCH_ALL_TOPICS'
        })
    } catch (error) {
        console.log('Error deleteTopicSaga: ', error);

    }
}

function* topicSaga() {
    yield takeLatest('FETCH_ALL_TOPICS', fetchAllTopics)
    yield takeLatest('FETCH_ALL_KEY_CLAIMS', fetchAllKeyClaims)
    yield takeLatest('FETCH_ALL_STREAMS', fetchAllStreams)
    yield takeLatest('FETCH_ALL_CONTRIBUTORS', fetchAllContributors)
    yield takeLatest('FETCH_ALL_PROPOSALS', fetchAllProposals)
    yield takeLatest('FETCH_ALL_LIKES', fetchAllLikes)
    yield takeLatest('FETCH_ALL_LOVES', fetchAllLoves)
    yield takeLatest('FETCH_NEW_TOPIC_TOPIC_PAGE', fetchFeaturedTopicPage)
    yield takeLatest('FETCH_NEW_TOPIC_LANDING_PAGE', fetchFeaturedTopicLanding)
    yield takeLatest('FETCH_ARCHIVED_TOPICS', fetchArchivedTopics)
    yield takeLatest('SET_NEW_TOPIC', setNewTopic)

    //ATTICUS ADDED:
    yield takeEvery('TOGGLE_PUBLISHED', togglePublishedSaga)
    yield takeEvery('TOGGLE_FEATURED', toggleFeaturedSaga)
    yield takeEvery('DELETE_TOPIC', deleteTopicSaga)
  }

  export default topicSaga;