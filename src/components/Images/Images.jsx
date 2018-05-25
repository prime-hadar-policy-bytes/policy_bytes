import React, { component } from 'react';
import { connect } from 'react-redux'
import ReactFilestack, { client } from 'filestack-react';



export class Images extends component {

    render(){
        return(
            <div>
                <h1>Images</h1>
                    <ReactFilestack
                    apikey={YOUR_API_KEY}
                    buttonText="Click me"
                    buttonClass="classname"
                    options={options}
                    onSuccess={this.yourCallbackFunction}
                    />
            </div>
            );
        }
    }


export default Images;