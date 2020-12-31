import React, { useContext } from 'react';
import './login.css';
import { AuthContext } from './authcontext';

export default class Login extends React.Component {
	static contextType = AuthContext;
	constructor(props) {
		super(props);
		if (!props.ref) props.ref = '/';
		this.state = {
			step: 1,
			s1: {

			},
			s2: {

			},
		}
	}

	render() {
		const { login, state } = this.context;
		const { isAuth, data } = state;

		if (isAuth) return window.location.href = ref;
		
		return (
			<div className="login">
				<div className="header">
					<h2>Login</h2>
				</div>
				{this.state.step === 1 && 
					<div className="s1">

					</div>
				}
				{this.state.step === 2 && 
					<div className="s2">

					</div>
				}
			</div>
		)
	}
}