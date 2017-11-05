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
        this.state = { panelOpen: false }
    }

    onTogglePanel = () => {
        this.setState(prevState => ({
            panelOpen: !prevState.panelOpen
        }));
    };

    onToggle = () => {
        this.onTogglePanel();
    };

    render () {

        const showModal = this.props.show;
        const {item} = this.props;

        return (
            <div className={this.state.panelOpen ? 'modal panel active' : 'modal panel'}
                 key={item.idx}
                 onClick={this.onToggle}>
                <p className="text-emphasis">{item.content}</p>
                <h3 className="text-light">{item.header}</h3>


                <style jsx>{`
                    .panel.modal p {
                        font-color: #354052
                        margin-bottom: 12px;
                    }
                `}
                </style>

            </div>
        )
    }
}