import React, {Component} from 'react';
import Modal from 'simple-react-modal'
import _ from 'lodash';
import ModalPanel from "./ModalPanel";

const overlayStyle = {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: '0',
    left: '0',
    display: 'flex',
    zIndex: '400',
    transition: 'opacity .2s ease-in'
};

const containerStyle = {
    width: '730px',
    position: 'relative',
    margin: '10% auto',
    padding: '0',
    background: '#fff'
};

export default class AddIMFProjectModal extends Component {
    static get defaultProps() {
        return {
            onClose: _.noop,
            onOpen: _.noop,
            onAdd: _.noop,
            onTogglePanel: _.noop,
            items: _.noop
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
                content:'Start with a blank SKU'
            },
            {
                header:'SKU Template',
                content:'Create a SKU with existing template'
            },
            {
                header:'Upload From Excel Spreadsheet',
                content:'Import an Excel Spreadsheet'
            },
            {
                header:'From Existing SKU',
                content:'Create a SKU from existing SKU attributes'
            },
            {
                header:'Kleenex SKU Template',
                content:'Create a SKU of Kleenex product attributes'
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