import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios'

function* fetchNewTopic(action){
    try{

        //topicResponse sends get request to router '/api/topic/featured' and 
        //receives back the topic admin wants to be the featured topic and ids and stores
        //it in topicResponse.data
        const topicResponse = yield call(axios.get, '/api/topic/featured')

        //sends new featured topic to newTopic reducer via action 'SET_NEW_FEATURED_TOPIC'
        //and payload topicResponse.data
        yield put({
            type: 'SET_NEW_FEATURED_TOPIC',
            payload: topicResponse.data
        })

    //if there is an error in sending get request to router, the error
    //will display in the console log
    }catch(error){
        console.log('Error in getting topic: ', error);
        
    }
}

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
        console.log('Error in getting topic: ', error);
        
    }
}

function* factionSaga() {
    yield takeLatest('FETCH_NEW_TOPIC', fetchNewTopic)
    yield takeLatest('FETCH_ARCHIVED_TOPICS', fetchArchivedTopics)
  }

  export default factionSaga;