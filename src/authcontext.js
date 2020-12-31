import React, { createContext, Component } from "react";
import axios from 'axios'
export const AuthContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://api.felixmuzikal.sk/auth',
});

class AuthContextProvider extends Component {
    constructor(props) {
        super(props);
        this.auth();
        this.state = {
            isAuth: false,
            data: null,
            err: null,
        }
    }
    logout = () => {
        Axios.post('/logout')
            .then(result => {
                if (result.status === 200) {
                    this.setState({
                        ...this.state,
                        isAuth: false
                    });
                    window.location.href = '/';
                }
                else {
                    this.setState({ ...this.state, err: result.data.error });
                }
            })
            .catch(err => this.setState({ ...this.state, err: err }));
    }
    auth = async () => {
        Axios.post('/')
            .then(result => {
                if (result.status === 200) {
                    this.setState({
                        ...this.state,
                        isAuth: true,
                        data: result.data
                    });
                }
                else {
                    this.setState({
                        ...this.state,
                        isAuth: false,
                        data: null,
                    });
                }
            }).catch(err => this.setState({ ...this.state, err: err }));
    }

    render() {
        const contextValue = {
            state: this.state,
            auth: this.auth,
            logout: this.logout
        }
        return (
            <AuthContext.Provider value={contextValue}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }

}

export default AuthContextProvider;