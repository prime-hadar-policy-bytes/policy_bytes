import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';
import { Tooltip } from 'react-bootstrap';

class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadItem: '',
            show: false
        }

    }


    handleUploadContent = (result) => {
        this.setState({   
            uploadItem: result.filesUploaded[0].url     
        })
        this.props.dispatch({
            type: 'ADD_UPLOAD',
            payload: this.state.uploadItem
        })
        console.log('picture upload', this.state.uploadItem);
    }


    render() {

        const apikey = 'AMdZyEtwSaP0XBNOaUMvAz';
        const security = {policy: "eyJleHBpcnkiOjE1MjgzNTQ4MDB9",
                        signature: "082801620021a268b20700e8a56e83e074d19a0f9a0bda26a1273c4db4935398"};
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
                <ReactFilestack
                apikey={apikey}
                buttonText="Click here to upload content"
                buttonClass="classname"
                options={options}
                onSuccess={this.handleUploadContent}
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