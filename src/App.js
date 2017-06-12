import React, { Component } from 'react';
import './App.css';
import Video from './components/Video';

class App extends Component {
  constructor() {
    super();

    this.renderLogin = this.renderLogin.bind(this);

    this.state = {
      username: '',
      password:'',
      authtoken: null,
      uid: null,
    }
  }

  renderLogin() {
    return (
      <nav className="login">
        <h2>Login</h2>
        <p>Sign in to check out your videos!</p>
        <form className="login-form">
          <input type="text" name="username" placeholder="Username" required /><br />
          <input type="text" name="password" placeholder="Password" required /><br /><br />
          <input type="submit" value="Login!" />
        </form>
      </nav>  
    );
  }

  render() {
    // check if anyone is logged in
    if (!this.state.uid) {
      return <div>{this.renderLogin()}</div>
    }
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to NumberG</h1>
          <h3>It's like NumberF. But Better.</h3>
        </div>
        <ul className="video-list">
        {
          Object
            .keys(this.state.videos)
            .map(key => <Video details={this.state.videos[key]} />)
        }
        </ul>
      </div>
    );
  }
}

export default App;