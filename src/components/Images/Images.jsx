import React, { Component } from 'react';
import { connect } from 'react-redux'
import ReactFilestack, { client } from 'filestack-react';
import filestack from 'filestack-js';
import Footer from '../Footer/Footer.jsx'
// import FILESTACK_API_KEY from '../'


class Images extends Component {
    constructor(props) {
        super(props)
        this.state = {
            uploadItem: ''
        }

    }

    handleUploadContent = (result) => {
        console.log('upload clicked', this.state);
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

        const client = filestack.init('AMdZyEtwSaP0XBNOaUMvAz');
        // console.log('in process.env', apikey ,process.env.FILESTACK_API_KEY)
        const apikey = 'AMdZyEtwSaP0XBNOaUMvAz';
        //process.env.FILESTACK_API_KEY
        const options = {
            accept: ['image/*', 'video/*'],
            maxFiles: 1,
            storeTo: {
              location: 's3'
            }
        }

        return(
            <div>
                <h1>Images</h1>
                    <ReactFilestack
                    apikey={apikey}
                    buttonText="Click here to upload content"
                    buttonClass="classname"
                    options={options}
                    onSuccess={this.handleUploadContent}
                    />
                    <Footer/>
            </div>
            )
        }
    }

    const mapStateToProps = (state) => ({
        state
})


export default connect(mapStateToProps)(Images);