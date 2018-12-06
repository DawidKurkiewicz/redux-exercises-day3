import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

import { auth } from '../firebaseConfig'

import Forms from './Forms'

import { connect } from 'react-redux'

import {
  initAuthChangeListeningAsyncAction, 
  logOutAsyncAction,
  logInByGoogleAsyncAction
} from '../state/auth'

class Auth extends React.Component {
  state = {
    email: '',
    password: '',
  }

  componentDidMount() {
    this.props._initAuthChangeListeningAsyncAction()
  }

  onEmailChangeHandler = event => {
    this.setState({ email: event.target.value })
  }
  onPasswordChangeHandler = event => {
    this.setState({ password: event.target.value })
  }

  onLogInClick = () => {
    auth.signInWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        alert('Something is wrong! Check console for error details!')
        console.log(error)
      })
  }




  render() {
    return (
      this.props._isUserLoggedIn ? <div>
        <FloatingActionButton
          style={{
            position: 'fixed',
            top: 10,
            right: 10,
            zIndex: 9999,
            color: 'white'
          }}
          secondary={true}
          onClick={this.props._logOutAsyncAction}
        >
          X
          </FloatingActionButton>
        {this.props.children}
      </div>
        :
        <Forms
          email={this.state.email}
          onEmailChangeHandler={this.onEmailChangeHandler}
          password={this.state.password}
          onPasswordChangeHandler={this.onPasswordChangeHandler}
          onLogInClick={this.onLogInClick}
          onLogInByGoogleClick={this.props._logInByGoogleAsyncAction}
        />
    )
  }
}

const mapStateToProps = state => ({
  _isUserLoggedIn: state.auth.isUserLoggedIn
})

const mapDispatchToProps = dispatch => ({
  _initAuthChangeListeningAsyncAction: () => dispatch(initAuthChangeListeningAsyncAction()),
  _logOutAsyncAction: () => dispatch(logOutAsyncAction()),
  _logInByGoogleAsyncAction: () => dispatch(logInByGoogleAsyncAction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Auth)