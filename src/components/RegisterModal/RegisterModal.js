import React, { Component } from 'react';
import LoginModal from '../LoginModal/LoginModal';
import { Button, FormControl, FormGroup, Modal } from 'react-bootstrap'; 

class RegisterModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      message: '',
      open: false,
      registered: false
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Choose a username and password!',
      });
    } else {
      const request = new Request('api/user/register', {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password,
        }),
      });

      fetch(request)
        .then((response) => {
          if (response.status === 201) {
            // this.props.history.push('/home');
            this.setState({
              registered: true
            });
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <p
          className="alert"
          role="alert"
        >
          {this.state.message}
        </p>
      );
    }
    return (<span />);
  }

  render() {

    if (this.state.registered) {
      return (
        <LoginModal registered={true} />
      )
    }
    return (
      <div>
        <Button bsSize="small" onClick={this.handleOpen}>
          Admin Register
        </Button>

        <Modal show={this.state.open} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>{this.renderAlert()}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup
                controlId=""
              >
                <FormControl
                  type="text"
                  placeholder="Enter a new user name"
                  value={this.state.username}
                  onChange={this.handleInputChangeFor('username')}
                />
                <FormControl
                  type="text"
                  placeholder="Enter a valid password"
                  value={this.state.password}
                  onChange={this.handleInputChangeFor('password')}
                />
              </FormGroup>
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button onClick={this.registerUser}>Register</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default RegisterModal;

