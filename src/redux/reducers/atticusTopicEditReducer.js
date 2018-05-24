import { combineReducers } from 'redux';

let emptyTopicEditCache = {
    topicTitle: 'Does this work',
    topicSummary: '',
    topicPremise: '',
    topicReadMore: '',
    topicCommonGround: '',
    contributor1FirstName: '',
    contributor1LastName: '',
    bio1: '',
    photo1: '',
    proposal1: '',
    contributor1FirstName: '',
    contributor1LastName: '',
    bio2: '',
    photo2: '',
    proposal2: '',
    keyClaims: {
        0: {
            claimId: 0,
            claimContributor: '',
            keyClaim: '',
            streamData: {
                0: {
                    streamContributor: '',
                    streamComment: '',
                    streamEvidence: '',
                }
            }
        }
    }
}

const topicEditCache = (state = emptyTopicEditCache, action) => {
    switch (action.type) {

//RETURN CURRENT STATE ITEM
        case 'FETCH_EDIT_CACHE':
            return state; 

//HANDLE CHANGE FOR TOPIC INFO (FIRST LEVEL OF OBJECT)
        case 'CHANGE_TOPIC_INFO':
            return {
                ...state, 
                [action.payload.name]: action.payload.value,
            }

//HANDLE CHANGE FOR KEY CLAIM INFO (SECOND LEVEL OF OBJECT)    
        case 'CHANGE_KEY_CLAIM_INFO':
            console.log('action', action);
            console.log('action.payload', action.payload);
            console.log('id, name, value', action.payload.id, action.payload.name, action.payload.value);
            
            return{
                ...state, 
                keyClaims: {
                    ...state.keyClaims,
                [action.payload.id]: {
                    ...state.keyClaims[action.payload.id],
                    [action.payload.name]: action.payload.value
                }
            }
        }
            

//HANDLE CHANGE FOR STREAM ITEM INFO (THIRD LEVEL OF OBJECT)    
        case 'CHANGE_STREAM_ITEM_INFO': 
            return {
                ...state,
                keyClaims: {
                    ...state.keyClaims, 
                    [action.payload.claimId]: {
                        ...state.keyClaims[action.payload.claimId],
                        streamData: {
                            ...state.keyClaims[action.payload.claimId].streamData,
                            [action.payload.streamId]: {
                                ...state.keyClaims[action.payload.claimId].streamData[action.payload.streamId],
                                [action.payload.eventTarget.name]: action.payload.eventTarget.value
                            }
                        }
                    }
                } 
            }
           
        

//ADD A NEW KEY CLAIM TO THE STATE OBJECT
        case 'ADD_KEY_CLAIM' :
            return {
                ...state,
                keyClaims: {
                    ...state.keyClaims, 
                    [action.payload]: {
                        claimId: action.payload, 
                        claimContributor: '',
                        keyClaim: '',
                        keyClaimEvidence: '', 
                        streamData: {
                            0: {
                                streamContributor: '', 
                                streamComment: '',
                                streamEvidence: '', 
                            },
                        }
                    }, 
                  }
            }
          

//ADD A NEW STREAM ITEM TO CLAIM BASED ON CLAIM ID
        case 'ADD_STREAM_ITEM':
        console.log('in ADD_STREAM_ITEM, payload: ', action.payload);
            return {
                ...state,
                keyClaims: {
                    ...state.keyClaims,
                    [action.payload.claimId]: {
                        ...state.keyClaims[action.payload.claimId],
                        streamData: {
                            ...state.keyClaims[action.payload.claimId].streamData,
                            [action.payload.streamItemId]: {
                                streamContributor: '', 
                                streamComment: '', 
                                streamEvidence: '', 
                            }
                        }
                    }
                }
            }


//SET REDUX STORE TO HOLD SELECTED TOPIC TO BE EDITED 
        case 'CACHE_TOPIC_TO_EDIT':
            return action.payload
        default: 
        return state
    }
}


export default combineReducers({
    topicEditCache
})