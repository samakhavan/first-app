import React from 'react';
import $ from 'jquery';
import Video from './Video';

class Login extends React.Component {
	constructor() {
		super();
		this.handleUsernameChange = this.handleUsernameChange.bind(this);
		this.handlePasswordChange = this.handlePasswordChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCollection = this.handleCollection.bind(this);
		this.handleLogout = this.handleLogout.bind(this);

		this.state = {
			username: '',
			password: '',
			authtoken: null,
			uid: null,
			collection: null,
		}
	}

	handleUsernameChange(e) {
		this.setState({ username: e.target.value });
	}

	handlePasswordChange(e) {
		this.setState({ password: e.target.value });
	}

	handleSubmit(e) {
		const details = {
			'user[email]': this.state.username,
			'user[password]': this.state.password,
		};

		$.ajax({
			type: 'POST',
			url: 'https://numberf.com/api/v1/login',
			data: details,
			success: (data) => {
				this.setState({ authtoken: data.user.auth_token,
								uid: data.user.id,
				});
			},
			error: function() { alert("Invalid username or password."); },
		});

		e.preventDefault();
	}

	handleCollection(id) {
		$.ajax({
			type: 'GET',
			url: 'https://numberf.com/api/v1/users/' + id + '/collection',
			data: { 'id': id },
			success: (data) => {
				this.setState({ 'collection': [...data.collection]});
			},
			error: function() { alert("error occurred"); },
		});
	}

	handleLogout() {
		this.setState({
			authtoken: null,
			uid: null,
			collection: null,
		});
	}

	render() {
		if (this.state.uid === null) {
			return (
				<div>
					<center>
        			<h2>Login</h2>
        			<p>Sign in to check out your videos!</p>
        			<form onSubmit={this.handleSubmit}>
          				<input type="text" placeholder="Username" value={this.state.username} onChange={this.handleUsernameChange} required /><br />
          				<input type="text" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} required /><br /><br />
          				<input type="submit" value="Login" />
        			</form>
        			</center>
        		</div>
			);
		}
		else if (this.state.uid !== null && this.state.collection === null) {
			return (
			<div>
				{this.handleCollection(this.state.uid)}
				Loading your collection...
			</div>
			);
		}
		else if (this.state.uid !== null && this.state.collection !== null) {
			const logout = <button onClick={this.handleLogout}>Logout</button>
			return (
				<div className="App">
        			<center><div className="App-header">
          				<h1>Welcome to NumberG</h1>
          				<h3>It's like NumberF. But Better.</h3>
      		    	</div>
					{logout}
					<hr />
					<Video details={this.state.collection} />
					</center>
				</div>
			);
		}
	}
}

export default Login;