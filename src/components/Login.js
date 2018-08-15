import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class Login extends Component {

  state = {
    user : 'none',
  }

  changeUser = (e) => {
    const user = e.target.value
    this.setState(() => ({ user }));
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.user))
    this.props.history.push("/");
  }

  render() {





    return <section>
        <div className="wrapper">
          <div className="box">
            <div className='box-header center'>
              <h3>Welcome to the Would You Rather App!</h3>
              <h5>Please sign in to continue</h5>
            </div>
            <div className='box-content center'>
              <h1>Sign in</h1>
              <form onSubmit={this.handleLogin}>
                <select onChange={this.changeUser} value={this.state.user}>
                  <option value='none' disabled defaultValue>Select User</option>
                  {this.props.userIds.map((userId) => (
                  <option key={userId} value={userId}>{this.props.users[userId].name}</option>      
                  ))}
                </select>
              <button disabled={this.state.user === 'none'}>Sign In</button>
              </form>
            </div>
          </div>
        </div>
      </section>;
  }
}

function mapStateToProps({ users }) {
  return {
    userIds: Object.keys(users),
    users
  }
}


export default withRouter(connect(mapStateToProps)(Login))
