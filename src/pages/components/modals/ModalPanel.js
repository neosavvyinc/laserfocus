import React, {Component} from 'react';
import _ from 'lodash';


export default class ModalPanel extends Component {
    static get defaultProps() {
        return {
            onTogglePanel: _.noop
        }
    }

    constructor() {
        super();
        this.state = {
            panelOpen: false,
            dropdownOpen: false,
            selectedItem: ''
        }
    }

    onCloseDropdown = (value) => {
        this.setState({
            selectedItem: value,
            dropdownOpen: false
        });
    };

    onTogglePanel = () => {
        if(this.state.panelOpen == false) {
            this.setState({
                panelOpen: true,
                dropdownOpen: true
            });
        } else {
            this.setState({
                panelOpen: false,
                dropdownOpen: false
            });
        }
    };


    render () {

        const showModal = this.props.show;
        const {item} = this.props;
        const list = item.dropdown;

        class ListItem extends Component {
            handleClick = () => {
                this.props.closeDropdown(this.props.value);
            }

            render() {
                return (
                    <li className="product-item"
                        onClick={this.handleClick}>
                        {this.props.value}
                        <style jsx>{`
                            .product-item {
                                border-bottom: 1px solid #e6eaee;
                                font-size: 16px;
                                font-weight: 600;
                                color: #354052;
                                line-height: 1.6em;
                                padding: 8px 0;
                                margin: 0;
                                cursor: pointer;
                            }
                                .product-item:hover {
                                    background-color: #f7f9fb;
                                }
                                .product-item:first-of-type {
                                    padding-top: 4px;
                                }

                            `}
                        </style>
                    </li>
                );
            }
        }

        return (
            <div className={this.state.panelOpen ? 'modal panel active' : 'modal panel'}
                 key={item.idx}>
                <div className="panel-modal-button"
                     onClick={this.onTogglePanel}>
                    <p className="text-emphasis">{item.content}</p>
                    {this.state.selectedItem ?
                        <h3 className="text-light">Selected SKU: <span className="text-15">{this.state.selectedItem}</span></h3>
                        :
                        <h3 className="text-light">{item.header}</h3>
                    }
                </div>

                {
                    list ?
                    (
                        <div className={this.state.dropdownOpen ? 'modal-dropdown open' : 'modal-dropdown'}>
                            <div className="notifications-bar">
                                <span className="text-16">Select SKU</span>
                            </div>

                            <div className="search-input">
                                <input className="hidden-search" placeholder="Search by SKU name"/>
                            </div>

                            <div className="scrollable-div">
                                <ul className="product-list">
                                    {
                                        _.map(list, (listItem, idx) => {
                                            return <ListItem
                                                className="product-item"
                                                key={idx}
                                                value={listItem.value}
                                                closeDropdown={this.onCloseDropdown}
                                            />

                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    )
                    : ''
                }


            <style jsx>{`
                .modal.panel p {
                    font-color: #354052
                    margin-bottom: 12px;
                }

                .modal-dropdown {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    margin-top: 1px;
                    border-radius: 4px;
                    width: 100%;
                    height: 0;
                    min-height: 0;
                    background-color: white;
                    border: none;
                    box-shadow: none;
                    overflow: hidden;
                    transition: min-height 0.3s;
                }
                    .modal-dropdown.open {
                        min-height: 248px;
                        border: 1px solid #e6eaee;
                        box-shadow: 0px 2px 4px 3px rgba(0,0,0,0.03);
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

                .search-input {
                    margin: 0 16px 8px;
                    width: auto;
                }

                .scrollable-div {
                    margin: 0px 16px 16px;
                    max-height: 20vh;
                    overflow: hidden;
                    overflow-y: auto;
                }
                    `}
                </style>

            </div>
        )
    }
}