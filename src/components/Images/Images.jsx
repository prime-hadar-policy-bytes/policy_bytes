import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';


class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadItem: ''
        }
    }


    onSuccess=() =>{

    }


    // handleUploadContent = (result) => {
    //     this.setState({   
    //         uploadItem: result.filesUploaded[0].url     
    //     })
    //     this.props.dispatch({
    //         type: 'ADD_UPLOAD',
    //         payload: this.state.uploadItem
    //     })
    //     console.log('picture upload', this.state.uploadItem);
    // }


    render() {

        const apikey = 'AMdZyEtwSaP0XBNOaUMvAz';
        const security = {policy: "eyJleHBpcnkiOjE1MjgyNjY2MDAsImNhbGwiOlsicGljayIsInJlYWQiLCJzdGF0Iiwid3JpdGUiLCJ3cml0ZVVybCIsInN0b3JlIiwiY29udmVydCIsInJlbW92ZSIsImV4aWYiXX0=",
                        signature: "67168f3af0d8c11b316cce342f7e551222e838f82afc6697aa9a142d1db93390"};
        const client = filestack.init(apikey,security);
        const options = {
            accept: ['image/*', 'video/*'],
            maxFiles: 1,
            storeTo: {
              location: 's3'
            }
        
        }

        return(
            <div>
                {JSON.stringify(this.state.uploadItem)}
                <ReactFilestack
                apikey={apikey}
                buttonText="Click here to upload content"
                buttonClass="classname"
                options={options}
                onSuccess={this.props.handleUploadContent}
                security={security}

                />
            </div>
            
            )
        }
    }

    const mapStateToProps = (state) => ({
        state
})


export default connect(mapStateToProps)(Images);