import React, {Component} from 'react';
import Modal from 'simple-react-modal'
import _ from 'lodash';

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
            onAdd: _.noop
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
        const showModal = this.props.show
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
                            <div className="row">
                                <div className="blue-panel">
                                    <p className="text-emphasis">Blank/New SKU</p>
                                    <h3 className="text-light">Start with a blank SKU</h3>
                                </div>
                                <div>
                                    <p className="text-emphasis">SKU Template</p>
                                    <h3 className="text-light">Create a SKU with existing template</h3>
                                </div>
                            </div>

                            <div className="row">
                                <div>
                                    <p className="text-emphasis">Upload From Excel Spreadsheet</p>
                                    <h3 className="text-light">Import an Excel Spreadsheet</h3>
                                </div>
                                <div>
                                    <p className="text-emphasis">From Existing SKU</p>
                                    <h3 className="text-light">Create a SKU from existing SKU attributes</h3>
                                </div>
                            </div>

                            <div className="row">

                                <div>
                                    <p className="text-emphasis">Kleenex SKU Template</p>
                                    <h3 className="text-light">Create a SKU of Kleenex product attributes</h3>
                                </div>
                            </div>

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
                        height: 64px;
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


                    .footer {
                        height: 64px;
                        background-color: #fafafa;
                    }
                        .footer .btn-group {
                            width: 100%;
                            text-align: right;
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


                    .content {
                        flex-grow: 1;
                    }

                    .attributes {
                        display: flex;
                        flex-direction: column;
                        margin: 30px;
                    }

                        .attributes p {
                            margin-bottom: 12px;
                        }

                        .attributes .row {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;
                            justify-content: space-between;
                            margin-bottom: 32px;
                        }

                        .attributes .row > div {
                            width: 46%;
                        }

                        .blue-panel {
                            width: 50%;
                            border-radius: 4px;
                            background-color: rgba(30, 159, 207, 0.1);
                            border: solid 1px #1e9fcf;
                            margin: 0 32px 0 0;
                            padding: 14px;
                        }


                    `}
                </style>

            </Modal>
        )
    }
}