import React, { Component } from 'react';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import '../TopicPage.css'

class LikeButtonProposal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likedProposal: false,
            count: 0
        };
    }

    componentWillReceiveProps = (nextProps) => {

        if (this.props.id == !nextProps.id) {
            this.getProposalLikes(nextProps.id);
            console.log('nextProps', nextProps.id);
            console.log('this.props', nextProps.id);
        }
    }

    getProposalLikes = (id) => {
        axios.get(`/api/likes/get/proposal/${id}`)
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

    likeProposal = (id) => {

        this.setState({
            likedProposal: !this.state.likedProposal
        }, () => {

            let likeToPut = {
                columnName: 'proposal_id'
            };
            axios.put(`/api/likes/increment/${id}`, likeToPut)
                .then((response) => {
                    this.getProposalLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }

    unlikeProposal = (id) => {
        this.setState({
            likedProposal: !this.state.likedProposal
        }, () => {

            let likeToPut = {
                columnName: 'proposal_id'
            };
            axios.put(`/api/likes/decrement/${id}`, likeToPut)
                .then((response) => {
                    this.getProposalLikes(this.props.id);
                    console.log('this is state.count', this.state.count);
                }).catch((err) => {
                    console.log(err)
                });
        })
    }

    render() {

        // console.log('this is this.props.id', this.props.id);
        return (

            <span>{!this.state.likedProposal ? <Button className="keyClaimFooterItem" onClick={() => this.likeProposal(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button> : <Button className="keyClaimFooterItem" bsStyle="success" onClick={() => this.unlikeProposal(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button>}</span>

        )
    }
}

// const mapStateToProps = (state) => ({
//     state
// })


export default (LikeButtonProposal);




