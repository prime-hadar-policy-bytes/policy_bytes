let dummyTopicCache = {
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
    contributor2FirstName: '',
    contributor2LastName: '',
    bio2: '',
    photo2: '',
    proposal2: '',
    keyClaims: {
        0: {
            claimDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
            claimContributor: '',
            keyClaim: '',
            streamData: {
                0: {
                    streamDbId: '', //<--- this comes from the database, doesn't really affect DOM placement
                    streamContributor: '',
                    streamComment: '',
                    streamEvidence: '',
                }
            }
        }
    }
}

export default dummyTopicCache