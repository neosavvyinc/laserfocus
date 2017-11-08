import React, { Component } from 'react';

export default class SettingsFlyout extends Component {

    constructor(props) {
        super(props);
        this.state = {openSettings: props.openSettings};
    }

    componentWillReceiveProps(props) {
        this.setState({ openSettings: props.openSettings });
    }

    render() {

        return (
            <div className={this.state.openSettings ? 'flyout-container open' : 'flyout-container'}>
                <div className="settings-flyout">
                    <div className="nub"></div>
                    <div className="settings-content">
                        <a>My Profile</a>
                        <a>Account Settings</a>
                        <a className="signout">Sign out</a>
                    </div>
                </div>

                <style jsx>{`

                    .flyout-container{
                        position: absolute;
                        top: 53px;
                        right: 6px;
                        width: 280px;
                        height: 0;
                        max-height: 0;
                        z-index: 100;
                        overflow: hidden;
                        transition: max-height 0.2s;
                    }
                        .flyout-container.open {
                            max-height: 20vh;
                            height: auto;
                        }
                    .settings-flyout {
                        width: 280px;
                        height: 100%;
                        margin-top: 15px;
                        border: 1px solid #e6eaee;
                        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
                        background-color: white;
                        display: flex;
                        flex-direction: column;
                    }

                    .settings-flyout .nub {
                        display: flex;
                        align-self: flex-end;
                        margin: -11px 10px 0 0;
                        width: 20px;
                        height: 20px;
                        transform: rotate(225deg);
                        border-right: 1px solid #e6eaee;
                        border-bottom: 1px solid #e6eaee;
                        background-color: white;
                        box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.03);
                    }

                    .settings-flyout .settings-content {
                        padding: 0 24px 24px;
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                    }

                    .settings-flyout .settings-content a {
                        color: #1e9fcf;
                        font-weight: bold;
                        text-align: center;
                        line-height: 2.6em;
                    }
                        .settings-flyout .settings-content .signout {
                            color: red;
                        }
                `}</style>
            </div>
        )
    }
}