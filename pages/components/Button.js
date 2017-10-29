import React from 'react'
import classNames from 'classnames/bind';

let cx = classNames.bind(btnEdit);

const btnEdit = {
    position: 'absolute',
    top: '0',
    right: '0'

};

export default class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };
    }

    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        let className = cx({
            'btn': true,
            'icon': true
        });

        return (
            <button
                className={className}
                style={btnEdit}
                onClick={this.handleClick}>
            </button>
        );
    }
}