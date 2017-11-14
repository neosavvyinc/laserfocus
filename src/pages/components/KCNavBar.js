import React, { Component } from 'react';
import { Link } from '../../routes';

export default class KCNavBar extends Component {

    static get defaultProps() {
        return {
            isOpen: false
        }
    }

    render() {

        return (

            <div className="navbar toolbar">
                <button className="navbar-btn active">Lifestyle</button>
                <button className="navbar-btn">
                    <Link route="gantt"><a>Gantt</a></Link>
                </button>
                <button className="navbar-btn">Calendar</button>
                <button className="navbar-btn">List</button>

                <style jsx>{`
                .navbar {
                    display: flex;
                    flex-direction: row;
                }
                    .navbar.toolbar {
                        margin-right: 20px;
                    }

                .navbar-btn {
                    width: auto;
                    min-width: 100px;
                    height: auto;
                    padding: 9px 15px;
                    font-size: .87em;
                    line-height: inherit;
                    color: #273142;
                    border: none;
                    border-radius: 0;
                    background-color: white;
                    cursor: pointer;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    outline: inherit !important;
                    position: relative;
                    margin-right: 1px;
                }
                    .navbar-btn:after {
                        position: absolute;
                        top: 0;
                        right: -1px;
                        content: '';
                        background-color: #dfe3e9;
                        width: 1px;
                        height: 100%;
                    }
                    .navbar-btn:hover,
                    .navbar-btn:hover a,
                    .navbar-btn.active {
                        color: white;
                        background-color: #1e9fcf;
                        border-color: transparent;
                        text-decoration: none;
                    }


                    .navbar-btn:nth-of-type(1) {
                        border-color: transparent;
                        border-top-left-radius: 4px;
                        border-bottom-left-radius: 4px;

                    }
                        .navbar-btn:nth-of-type(1).active {
                            border: none;
                        }
                    .navbar-btn:last-of-type {
                        border-color: transparent;
                        border-top-right-radius: 4px;
                        border-bottom-right-radius: 4px;
                        border: none;
                    }
                        .navbar-btn:after {
                            display: none;
                        }
                        .navbar-btn:last-of-type.active {
                            border: none;
                        }

                `}</style>

            </div>
        )
    }
}