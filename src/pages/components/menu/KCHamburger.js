import React, { Component } from 'react';
import _ from 'lodash';

export default class KCHamburger extends Component {
    static get defaultProps() {
        return {
            onToggleMenu: _.noop
        }
    }

    constructor(props) {
        super(props);
    }

    onToggle = () => {
        this.props.onToggleMenu();
    };

    render() {

        return (
            <div className="bm-burger-button"
                 onClick={this.onToggle} >
                <span className="bm-icon">
                    <div className="bm-burger-bars"></div>
                    <div className="bm-burger-bars"></div>
                    <div className="bm-burger-bars"></div>
                </span>

                <style jsx>{`

                .bm-burger-button {
                    width: 95px;
                    height: 70px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    cursor: pointer;
                }
                    .bm-burger-button:hover {
                        background-color: #1e9fcf;
                    }

                bm-icon: {
                    width: 18px;
                    height: 18px;
                }

                .bm-burger-bars {
                    background-color: #000;
                    height: 2px;
                    margin-top: 3px;
                    width: 18px;
                }
                    .bm-burger-button:hover .bm-burger-bars {
                       background-color: white;
                    }

                `}
                </style>

            </div>

        )
    }
}