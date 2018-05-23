import { combineReducers } from 'redux';

let emptyTopicEditCache = {
    topicTitle: '',
    topicSummary: '',
    topicPremise: '',
    topicReadMore: '',
    topicCommonGround: '',
    bio1: '',
    photo1: '',
    proposal1: '',
    bio2: '',
    photo2: '',
    proposal2: '',
    keyClaims: {
        0: {
            claimId: 0,
            claimContributor: '',
            keyClaim: '',
            keyClaimEvidence: '',
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
            let newState = {
                ...state, 
                [action.payload.name]: action.payload.value,
            }
            return newState 

        //HANDLE CHANGE FOR KEY CLAIM INFO (SECOND LEVEL OF OBJECT)    
        case 'CHANGE_KEY_CLAIM_INFO':
            newState = {
                ...state, 
                [action.payload.id]: {
                    ...state.keyClaims[action.payload.id],
                    [action.payload.name]: action.payload.value
                }
            }
            return newState; 

        //HANDLE CHANGE FOR STREAM ITEM INFO (THIRD LEVEL OF OBJECT)    
        case 'CHANGE_STREAM_ITEM_INFO': 
            newState = {
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
            return newState; 
        

        //ADD A NEW KEY CLAIM TO THE STATE OBJECT
        case 'ADD_KEY_CLAIM' :
            newState = {
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
            return newState; 

        //ADD A NEW STREAM ITEM TO CLAIM BASED ON CLAIM ID
        case 'ADD_STREAM_ITEM':
        console.log('in ADD_STREAM_ITEM, payload: ', action.payload);
            newState = {
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
            return newState;
        
        default: 
        return state
    }
}


export default combineReducers({
    topicEditCache
})