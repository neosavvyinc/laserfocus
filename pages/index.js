import React, {Component} from 'react';
import {createStore} from "redux";
import 'isomorphic-fetch'

import withRedux from "next-redux-wrapper";

import Page from '../layouts/main'
import KCHeader from './components/KCHeader';
import KCToolbar from './components/KCToolbar';
import KCGestationBoard from './components/KCGestationBoard';
import HamburgerMenu from './components/HamburgerMenu';


const reducer = (state = {
        boards: [],
        cards: []
    }, action) => {
    switch(action.type) {
        case 'FIND_BOARDS':
            return {...state, boards: action.payload};
        case 'FIND_CARDS':
            return {...state, cards: action.payload};
        default:
            return state;

    }
};

const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};


class Index extends Component {

    static async getInitialProps({store}) {
        const res = await fetch('http://localhost:3000/boards/');
        const boards = await res.json();
        store.dispatch({
            type: 'FIND_BOARDS',
            payload: boards
        });

        const res1 = await fetch('http://localhost:3000/cards/');
        const cards = await res1.json();
        store.dispatch({
            type: 'FIND_CARDS',
            payload: cards
        });
        return {};

    }
    render() {

        console.log("properties: ", this.props)
        return <Page>
             <main id="outer-container" className="app">
                <HamburgerMenu/>
                <div id="page-wrap">
                    <KCHeader/>
                    <KCToolbar/>
                    <KCGestationBoard
                        boards={this.props.boards}
                        cards={this.props.cards}
                    />
                </div>


                <style jsx>{`

                   .app {
                       margin: auto;
                       width: 100%;
                       min-width: 1440px;
                       background-color: #eff3f6;
                   }
                   #outer-container {
                       min-height: 100vh;
                   }


                `}
                </style>


             </main>
        </Page>
    }
}

const WrappedIndex = withRedux(
    {
        createStore: makeStore,
        debug: false,
        mapStateToProps: (state) => ({
            boards: state.boards,
            cards: state.cards
        })
    }
)(Index);

export default WrappedIndex;