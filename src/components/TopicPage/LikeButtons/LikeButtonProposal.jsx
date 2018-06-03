import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Panel, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import axios from 'axios';

import '../TopicPage.css'

class LikeButtonProposal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            likedProposal: false,
            count: ''
        };
    }

    componentDidMount = () =>{
        console.log('in componentDidMount');
        let id = this.props.id;
        console.log(id);
        this.getProposalLikes(id);
    }

    componentWillReceiveProps(nextProps) {
    
        // if (this.props.id ==! nextProps.id) {
        //     this.getProposalLikes(nextProps.id);
        //     console.log('nextProps', nextProps.id);
        // }
    }

    getProposalLikes = (id) =>{
        console.log('in getProposalLikes where is ID??', id);
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
        //AXIOS PUT id ++, THEN GET, THEN
        console.log(this.props.id);
        this.setState({
            likedProposal: !this.state.likedProposal
        })

    }

    unlikeProposal = (id) => {
        //AXIOS PUT id --, THEN GET, THEN
        console.log(this.props.id);
        this.setState({
            likedProposal: !this.state.likedProposal
        })

    }

    render() {

        // console.log('this is this.props.id', this.props.id);
        return (

            <span>{!this.state.likedProposal ? <Button className="keyClaimFooterItem" onClick={() => this.likeProposal(this.props.id)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button> : <Button className="keyClaimFooterItem" bsStyle="success" className="commentButton" onClick={() => this.unlikeProposal(this.props.comment)} ><Glyphicon glyph="thumbs-up" /> {this.state.count}</Button>}</span>

        )
    }
}

// const mapStateToProps = (state) => ({
//     state
// })


export default (LikeButtonProposal);




