import React, { Component } from 'react';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import '../TopicPage.css'

class LikeButtonStream extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likedStream: false,
            count: 0
        };
    }


    componentWillReceiveProps = (nextProps) => {

        if (this.props.id == !nextProps.id) {
            this.getStreamLikes(nextProps.id);
            console.log('nextProps', nextProps.id);
            console.log('this.props', nextProps.id);
        }
    }

    getStreamLikes = (id) => {
        axios.get(`/api/likes/get/stream/${id}`)
            .then((response) => {
                console.log('here is response from axios.get', response.data);
                this.setState({
                    count: response.data[0].count
                })
                console.log('this is state.count', this.state.count);
            }).catch((err) => {
                console.log(err)
            });

    }

    likeStream = (id) => {

        this.setState({
            likedStream: !this.state.likedStream
        }, () => {

            let likeToPut = {
                columnName: 'stream_id'
            };
            axios.put(`/api/likes/increment/${id}`, likeToPut)
                .then((response) => {
                    this.getStreamLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }

    unlikeStream = (id) => {
        this.setState({
            likedStream: !this.state.likedStream
        }, () => {

            let likeToPut = {
                columnName: 'stream_id'
            };
            axios.put(`/api/likes/decrement/${id}`, likeToPut)
                .then((response) => {
                    this.getStreamLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }

    render() {

        // console.log('this is this.props.id', this.props.id);
        return (

            <span>{!this.state.likedStream ? <Button className="keyClaimFooterItem" onClick={() => this.likeStream(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button> : <Button className="keyClaimFooterItem" bsStyle="success" onClick={() => this.unlikeStream(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button>}</span>

        )
    }
}

// const mapStateToProps = (state) => ({
//     state
// })


export default (LikeButtonStream);




