import React, { Component } from 'react';

export default class KCHamburgerMenu extends Component {

    static get defaultProps() {
        return {
            isOpen: false
        }
    }

    render() {

        return (

            <div className={this.props.isOpen ? 'navigation-menu open' : 'navigation-menu'}>
                <ul className="align-top">
                    <li className="nav-item">Project View</li>
                    <li className="nav-item">Board View</li>
                    <li className="nav-item">Users</li>
                    <li className="nav-item">Royalty Codes</li>
                    <li className="nav-item">Facilitators</li>
                </ul>

                <ul className="align-bottom">
                    <li className="nav-item">Settings</li>
                    <li className="nav-item">Help & Support</li>
                </ul>

            <style jsx>{`

                .navigation-menu {
                    width: 0;
                    overflow: hidden;
                    position: absolute;
                    z-index: 400;
                    background: white;
                    border-left: none;
                    top: 70px;
                    height: calc(100vh - 70px);
                    display: flex !important;
                    flex-direction: column;
                    padding: 26px 0;
                    box-sizing: border-box;
                    transition: width 0.2s;
                    box-shadow: 3px 2px 3px 0px rgba(48,58,113,0.1);
                }
                    .navigation-menu.open {
                        width: 280px;
                        overflow:auto;
                        border-left: 1px solid #eff3f6;
                    }


                .navigation-menu ul {
                    margin: 0;
                    padding: 0;
                }

                .bc-menu-wrap {
                    position: fixed;
                    right: inherit;
                    z-index: 10;
                    width: 270px;
                    height: calc(100vh - 70px);
                    transition: all 0.5s;
                    top: 70px;
                }

                .bm-item-list {
                    height:100%;
                    color:#b8b7ad;
                    padding:0
                }


                .nav-item {
                    list-style: none;
                    font-size: 16px;
                    font-weight: 600;
                    color: #354052;
                    line-height: 1.6em;
                    padding: 6px 6px 6px 30px;
                    margin: 0;
                    cursor: pointer;
                }
                    .nav-item:hover {
                        background-color: #f7f9fb;
                    }
                    .nav-item.selected {
                        background-color: #f7f9fb;
                    }

                .align-top {
                    flex-grow: 1;
                }
            `}</style>

            </div>
        )
    }
}