import React from 'react';
import { LoginContext } from './state';
import { When } from 'react-if';
export default class Auth extends React.Component {
    static contextType = LoginContext;
    render() {
        const isLoggedIn = this.context.LoggedIn;
        return (
            <When condition={isLoggedIn}>
                {this.props.children}
            </When>
        )
    }
}