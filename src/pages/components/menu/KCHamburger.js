import React, { Component } from 'react';

export default class KCHamburger extends Component {


    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false
        };
    }

    openMenu = () => {
        this.setState(prevState => ({
            menuOpen: !prevState.menuOpen
        }));
    };

    render() {

        return (
            <div className="bm-burger-button"
                 onClick={this.openMenu} >
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