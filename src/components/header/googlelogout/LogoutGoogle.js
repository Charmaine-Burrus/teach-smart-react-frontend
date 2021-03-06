import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';
import TeachSmartLogoWhite from '../../../images/TeachSmartLogoWhite.png';

class LogoutGoogle extends Component {

    logout = () => {
        localStorage.removeItem("loggedInUser");
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <GoogleLogout
                    clientId="859167518630-2vfc35jchg1lndfmto5jolrvtsvf1kae.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={this.logout}
                >
                </GoogleLogout>
                <img src={localStorage.getItem("profilePic")} className="profile-pic" alt="profile-pic"/>
                <a href="/"><img src={TeachSmartLogoWhite} className="mini-logo" alt="TeachSmart"/></a>
            </div>
        );
    }
}

export default LogoutGoogle;