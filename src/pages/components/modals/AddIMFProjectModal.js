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
                                <button>Help</button>
                            </div>
                        </div>
                    </div>

                    <div className="content">
                        <div className="attributes">
                            <div className="stuff">
                                <div>
                                    <h4>Project Number</h4>
                                    <h3 className="text-light">(200,003,023)</h3>
                                </div>
                                <div>
                                    <h4>Project Title</h4>
                                    <h3 className="text-light">(200,003,023) - Kleenex Disney tissues</h3>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="footer">
                        <div className="btn-group">
                            <button onClick={this.close}>Close</button>
                            <button onClick={this.onAdd}>Add</button>
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

                    .content {
                        flex-grow: 1;
                    }

                    .attributes {
                        display: flex;
                        flex-direction: column;
                        margin: 30px;
                    }

                        .attributes h4 {
                            margin-bottom: 12px;
                        }

                        .attributes h2 {
                            border-bottom: 1px solid lightblue;
                            line-height: 54px;
                        }

                        .attributes .stuff {
                            display: flex;
                            flex-direction: row;
                            flex-wrap: wrap;

                        }

                        .attributes .stuff div {
                            width:50%;
                        }

                    .footer {
                        height: 64px;
                        background-color: #fafafa;
                    }
                        .footer .btn-group {
                            width: 100%;
                            text-align: right;
                        }

                    .btn-group button {
                        margin: 0 0 0 24px;
                    }

                    `}
                </style>

            </Modal>
        )
    }
}