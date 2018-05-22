import React, { Component } from 'react';

import { Button, Modal } from 'react-bootstrap'; 


class TopicManageModal extends Component {
    render() {
        return(
            <div>
            <Modal.Dialog >
                <Modal.Header bsStyle="danger">
                <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
        
                <Modal.Body>One fine body...</Modal.Body>
        
                <Modal.Footer>
                <Button onClick={this.props.handleDismiss}>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
            </div>
        )
    }
}


export default TopicManageModal;
