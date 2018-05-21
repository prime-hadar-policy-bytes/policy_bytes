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

function* factionSaga() {
    yield takeLatest('FETCH_NEW_TOPIC', fetchNewTopic)
  }

  export default factionSaga;