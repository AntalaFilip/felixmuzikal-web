import React, { createContext, Component } from "react";
import axios from 'axios'
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';
export const AuthContext = createContext();

// Define the base URL
const Axios = axios.create({
    baseURL: 'https://api.felixmuzikal.sk/',
});

class AuthContextProvider extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(props) {
        super(props);
        this.auth();
        this.state = {
            isAuth: false,
            data: null,
        }
    }
    logout = () => {
        const { cookies } = this.props;
        cookies.remove(`sessionToken`);
        this.setState({
            ...this.state,
            isAuth: false
        })
        window.location.href = '/'
    }
    auth = async () => {
        const { cookies } = this.props;
        const token = cookies.get('sessionToken');
        if (token) {
            Axios.defaults.headers.common['Authorization'] = token;
            Axios.post('auth')
                .then(result => {
                    if (result.status === 200) {
                        this.setState({
                            ...this.state,
                            isAuth: true,
                            data: result.data
                        });
                    }
                    else this.logout();
                })
        }
        return this.state.isAuth;
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

export default withCookies(AuthContextProvider);