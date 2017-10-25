import React from 'react'
var classNames = require('classnames/bind');

let cx = classNames.bind(btnEdit);

var btnEdit = {
    position: 'absolute',
    top: '0',
    right: '0'

};

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { //counter: 1
        };



    handleClick = () => {
        this.setState({
            //counter: this.state.counter + 1
        });
    };

    render() {
        let className = cx({
            'btn': true,
            'icon': true
        });

        return (
            <button className={className} style={btnEdit} onClick={this.handleClick}>
                {this.state.counter}
            </button>
        );
    }
}