import _ from 'lodash';
import KCHamburger from './menu/KCHamburger';
import IconNotification from './icons/IconNotification'
import NotificationFlyout from './notifications/NotificationFlyout'
import SettingsFlyout from './SettingsFlyout'

import React, { Component } from 'react';

export default class KCHeader extends Component {
    static get defaultProps() {
        return {
            onToggleMenu: _.noop,
            onToggleBurger: _.noop
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            notificationsOpen: false,
            settingsOpen: false
        };
    }

    openNotifications = () => {
        this.setState(prevState => ({
            notificationsOpen: !prevState.notificationsOpen,
            settingsOpen: false
        }));
    };

    openSettings = () => {
        this.setState(prevState => ({
            settingsOpen: !prevState.settingsOpen,
            notificationsOpen: false
        }));
    };


    render() {

        return (

            <div className="application-header">

                <KCHamburger onToggleBurger={this.props.onToggleBurger}
                    onToggleMenu={this.props.onToggleMenu}
                />

                <p className="first-divider"/>

                <div className="logo-title">
                    <img src="/static/images/logo.jpg"
                         srcSet="/static/images/logo@2x.jpg 2x, /static/images/logo@3x.jpg 3x"
                         className="logo"/>
                    <span className="title text-emphasis">IMF Lite Tool 2.0</span>
                </div>


                <div className="search-input">
                    <input className="hidden-search" placeholder="Search"/>
                    <img src="/static/svg/ic-search.svg"
                         srcSet="/static/images/ic-search@2x.png 2x,/static/images/ic-search@3x.png 3x"
                         className="magnify-icon"/>
                </div>

                <div className="btn-notification" onClick={() => this.openNotifications()}>
                    <IconNotification  openNotifications={this.state.notificationsOpen ? true : false} />
                    <NotificationFlyout openNotifications={this.state.notificationsOpen ? true : false} />
                </div>

                <p className="second-divider"/>

                <div className="profile-container">
                    <p className="profile-picture"/>
                    <div className="user-role-container">
                        <span className="text-emphasis username">Adam Parrish</span>
                        <p className="role text-light">Admin</p>
                    </div>
                    <div className="settings-container" onClick={() => this.openSettings()}>
                        <SettingsFlyout openSettings={this.state.settingsOpen ? true : false} />
                    </div>
                </div>

                <style jsx>{`
                    .application-header {
                        height: 70px;
                        width: 100%;
                        background-color: #ffffff;
                        box-shadow: 0 4px 10px 0 rgba(48, 58, 113, 0.05);
                        border: solid 1px #eff3f6;
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        box-sizing: border-box;
                    }

                    .menu {
                        width: 95px;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    .bm-burger-button:hover {
                        background-color: #1e9fcf;
                    }
                    .bm-burger-bars:hover {
                        background-color: #fff;
                    }

                    .logo-title {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        flex-grow: 1;
                    }
                        .logo-title .logo {
                            width: 211px;
                            height: auto;
                            padding: 0 20px;
                        }
                        .logo-title .title {
                            border-left: 1px solid black;
                            padding-left: 17px;
                        }

                    .first-divider,
                    .second-divider {
                        width: 1px;
                        height: 100%;
                        background-color: #dfe3e9;
                        margin: 0;
                    }

                    .search-input {
                        margin: 0 20px 0 0;
                        width: 270px;
                        height: 34px;
                        border-radius: 4px;
                        background-color: #ffffff;
                        border: solid 1px #dfe3e9;
                        display: flex;
                        align-items: center;
                    }

                    .hidden-search {
                        width: 225px;
                        padding-left: 10px
                        padding-right: 10px
                        height: 85%;
                        opacity: 0.5;
                        font-family: 'Source Sans Pro';
                        font-size: 14px;
                        line-height: 1.36;
                        text-align: left;
                        border: 0px solid;
                        outline: none;
                    }

                    .magnify-icon {
                        width: 20px;
                        height: 20px;
                        object-fit: contain;
                    }

                    .btn-notification {
                        margin: 0 20px 0 0;
                        position: relative;
                    }
                        .btn-notification:hover {
                            cursor: pointer;
                        }
                    .icon-notification:hover svg,
                    .icon-notification:active svg {
                      fill: red;
                    }

                    .profile-container {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                        height: inherit;
                    }

                    .profile-picture {
                        margin: 0 0 0 20px
                        width: 44px;
                        height: 44px;
                        background-color: #7f8fa4;

                        display: none;
                    }

                    .user-role-container {
                        margin: 0 0 0 0
                        flex-direction: column;
                        align-items: flex-end;
                        flex-grow: 1;
                        margin: 0 0 0 20px;
                    }
                        .username {
                            width: 95px;
                            font-size: 16px;
                            font-weight: 600;
                            text-align: left;
                            color: #303a71;
                        }

                        .role {
                            margin: 0 0 0 0
                            width: 81px;
                            font-family: 'Source Sans Pro';
                            font-size: 14px;
                            text-align: left;
                            color: #9b9b9b;
                        }

                    .settings-container {
                        background: url(/static/svg/ic-dropdown.svg) no-repeat 0 0;
                        background-size: 8px;
                        background-position-y: 50%;
                        height: inherit;
                        width: 8px;
                        margin: 0 0 0 12px;
                        padding-right: 32px;
                        position: relative;
                        cursor: pointer;
                    }
                        .setting-container .dropdown-icon {
                            width: 8px;
                            height: 8px;
                        }


                    `}</style>
            </div>
        )
    }
}