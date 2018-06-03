import React, { Component } from 'react';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import '../TopicPage.css'

class LikeButtonKeyClaim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likedKeyClaim: false,
            count: 0
        };
    }


    componentWillReceiveProps = (nextProps) => {

        if (this.props.id == !nextProps.id) {
            this.getKeyCLaimLikes(nextProps.id);
            console.log('nextProps', nextProps.id);
            console.log('this.props', nextProps.id);
        }
    }

    getKeyClaimLikes = (id) => {
        axios.get(`/api/likes/get/keyClaim/${id}`)
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

    likeKeyClaim = (id) => {

        this.setState({
            likedKeyClaim: !this.state.likedKeyClaim
        }, () => {

            let likeToPut = {
                columnName: 'key_claim_id'
            };
            axios.put(`/api/likes/increment/${id}`, likeToPut)
                .then((response) => {
                    this.getKeyClaimLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }

    unlikeKeyClaim = (id) => {
        this.setState({
            likedKeyClaim: !this.state.likedKeyClaim
        }, () => {

            let likeToPut = {
                columnName: 'key_claim_id'
            };
            axios.put(`/api/likes/decrement/${id}`, likeToPut)
                .then((response) => {
                    this.getKeyClaimLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }


    render() {

        // console.log('this is this.props.id', this.props.id);
        return (

            <span>{!this.state.likedKeyClaim ? <Button className="keyClaimFooterItem" onClick={() => this.likeKeyClaim(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button> : <Button className="keyClaimFooterItem" bsStyle="success" onClick={() => this.unlikeKeyClaim(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button>}</span>

        )
    }
}

// const mapStateToProps = (state) => ({
//     state
// })


export default (LikeButtonKeyClaim);




