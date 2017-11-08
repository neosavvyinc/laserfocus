import React, {Component} from 'react';
import Modal from 'simple-react-modal'
import _ from 'lodash';
import ModalPanel from "./ModalPanel";

const overlayStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    zIndex: '400',
    transition: 'opacity .2s ease-in'
};

const containerStyle = {
    width: '730px',
    height: '100%',
    position: 'relative',
    margin: '10% auto',
    padding: '0',
    background: '#fff',
    border: '1px solid transparent',
    borderRadius: '4px',
    boxShadow: '3px 3px 3px 3px rgba(0,0,0,0.1)'
};

export default class AddIMFProjectModal extends Component {
    static get defaultProps() {
        return {
            onClose: _.noop,
            onOpen: _.noop,
            onAdd: _.noop,
            onTogglePanel: _.noop
        }
    }

    constructor() {
        super();
        this.state = {
            show: false
        }
    }

    close = () => {
        this.props.onClose();
    };

    open = () => {
        this.props.onOpen();
    };

    onAdd = () => {
        this.props.onAdd();
    };

    render () {

        const showModal = this.props.show;

        /* wouldn't this look good in the db? */
        let items = [
            {
                header:'Blank/New SKU',
                content:'Start with a blank SKU',
                dropdown: false
            },
            {
                header:'SKU Template',
                content:'Create a SKU with existing template',
                dropdown: false
            },
            {
                header:'Upload From Excel Spreadsheet',
                content:'Import an Excel Spreadsheet',
                dropdown: false
            },
            {
                header:'From Existing SKU',
                content:'Create a SKU from existing SKU attributes',
                dropdown: [
                    {value: "Kleenex Anti-viral++ Tissues"},
                    {value: "Kleenex Cool Touch™ Tissues"},
                    {value: "Kleenex Everyday Tissues Disney Moana..."},
                    {value: "Kleenex®  Soothing Lotion Tissues"},
                    {value: "Kleenex Trusted Care Facial Tissues, Star Wars Designs"},
                    {value: "Kleenex The Marvel Universe Designs Upright Tissue Box"},
                    {value: "Kleenex Trusted Care Facial Tissues featuring Disney • Pixar’s Cars 3"},
                    {value: "Kleenex Everyday Tissues Disney Moana..."}
                ]
            },
            {
                header:'Kleenex SKU Template',
                content:'Create a SKU of Kleenex product attributes',
                dropdown: false
            }
        ];


        return (
            <Modal show={showModal} transitionSpeed={50}
                   style={overlayStyle}
                   className="test-class" //this will completely overwrite the default css completely
                   containerStyle={containerStyle} //changes styling on the inner content area
                   closeOnOuterClick={true}
                   onClose={this.close}>
                <div className="modal-content">
                    <div className="header">
                        <div className="header-container">
                            <h1>Modal Header</h1>
                            <div className="btn-group">
                                <button className="btn help">
                                    <i className="material-icons help">help</i>
                                    Help
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="attributes">
                            {
                                _.map(items, (item, idx) => {
                                    return <ModalPanel
                                        onTogglePanel={this.props.onTogglePanel}
                                        key={idx}
                                        item={item}
                                    />

                                })
                            }
                        </div>
                    </div>

                    <div className="footer">
                        <div className="btn-group">
                            <button className="btn" onClick={this.close}>Close</button>
                            <button className="btn blue" onClick={this.onAdd}>Add</button>
                        </div>
                    </div>
                </div>

                <style jsx>{`

                    .modal-content {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                    }

                    .header,
                    .footer {
                        background-color: #fafafa;
                        min-height: 64px;
                        display: flex;
                        align-items: center;
                        padding: 0 32px;
                        width: 100%;
                        box-sizing: border-box;
                    }
                        .header .header-container {
                            display: flex;
                            flex-direction: row;
                            width: 100%;
                        }
                        .header .header-container h1 {
                            flex-grow: 1;
                            text-align: left;
                        }

                    .btn-group {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }

                        .header .btn-group .btn.help,
                        .header .btn-group .btn .help {
                            font-size: 14px;
                            color: #1e9fcf;
                        }

                        .footer .btn-group {
                            width: 100%;
                            text-align: right;
                        }


                    .content {
                        flex-grow: 1;
                    }

                    .attributes {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: space-between;
                        margin: 30px;
                    }

                        .attributes p {
                            font-color: #354052
                            margin-bottom: 12px;
                        }



                    `}
                </style>

            </Modal>
        )
    }
}