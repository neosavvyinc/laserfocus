import React, { Component } from 'react';
import Notification from './Notification'

export default class NotificationFlyout extends Component {

    constructor(props) {
        super(props);
        this.state = {openNotifications: props.openNotifications};
    }

    componentWillReceiveProps(props) {
        this.setState({ openNotifications: props.openNotifications });
    }

    render() {

        var flyoutClasses = 'flyout-container';
        if (this.state.openNotifications) flyoutClasses += ' open';

        return (
            <div className={flyoutClasses}>
                <div className="notification-flyout">
                    <div className="nub"></div>
                    <div className="notifications-bar">
                        <span className="text-emphasis">Notifications <span>(1)</span></span>
                        <a className="text-14">Mark all as read</a>
                    </div>
                    <div className="date-bar">
                        <span className="text-emphasis text-14 text-light">September</span>
                    </div>

                    <div className="scrollable-div">
                        <Notification />
                        <Notification />
                        <Notification />
                    </div>

                    <a className="see-all text-14">See all</a>
                </div>

                <style jsx>{`

                    .flyout-container {
                        position: absolute;
                        top: 32px;
                        right: -21px;
                        width: 360px;
                        height: 0;
                        max-height: 0;
                        z-index: 100;
                        overflow: hidden;
                        transition: max-height 1s;
                    }
                        .flyout-container.open {
                            max-height: 65vh;
                            height: auto;
                        }

                    .notification-flyout {
                        width: 360px;
                        height: 100%;
                        margin-top: 15px;
                        border: 1px solid #e6eaee;
                        box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);
                        background-color: white;
                        display: flex;
                        flex-direction: column;
                    }

                    .notification-flyout .nub {
                        display: flex;
                        align-self: flex-end;
                        margin: -11px 30px 0 0;
                        width: 20px;
                        height: 20px;
                        transform: rotate(225deg);
                        border-right: 1px solid #e6eaee;
                        border-bottom: 1px solid #e6eaee;
                        background-color: white;
                        box-shadow: 2px 2px 0px 0px rgba(0,0,0,0.03);
                    }

                    .notification-flyout a {
                        color: #1e9fcf;
                        font-weight: bold;
                        text-align: center;
                    }
                        .notifications-bar {
                            line-height: 2.4em;
                            display: flex;
                            flex-direction: row;
                            justify-content: space-between;
                            padding: 0 16px;
                        }
                            .notifications-bar a {
                                text-align: right;
                            }
                        .date-bar {
                            border-top: 1px solid #e6eaee;
                            border-bottom: 1px solid #e6eaee;
                            background-color: #f7f9fb;
                            padding: 5px 16px;
                        }
                            .date-bar span {
                                line-height 1.7em;
                            }

                        .scrollable-div {
                            max-height: 50vh;
                            overflow: hidden;
                            overflow-y: auto;
                        }

                        .see-all {
                            text-align: center;
                            width: 100%;
                            display: inline-block;
                            line-height: 2.3em;
                        }

                `}</style>
            </div>
        )
    }
}