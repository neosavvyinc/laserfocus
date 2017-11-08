import Page from '../layouts/main'
import React, { Component } from 'react';
import AddIMFProjectModal from './components/modals/AddIMFProjectModal';

const closeStyle = {
    border: '1px solid red'
};


export default class KCModal extends Component {

    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    onShowClicked = () => {
        this.setState({
            show: true
        });
    };

    onCloseClicked = () => {
        this.setState({
            show: false
        });
    };

    onAddClicked = () => {
        // do something
    };

    render() {

        return (
            <Page>

                <button style={{margin: '10% 46%'}}
                        onClick={this.onShowClicked}>Show Modal</button>

                <AddIMFProjectModal
                    show={this.state.show}
                    onAdd={this.onAddClicked}
                    onClose={this.onCloseClicked}
                />


            </Page>)
    }
}