import React, {Component} from 'react';
import {createStore} from "redux";
import 'isomorphic-fetch'

import withRedux from "next-redux-wrapper";

import Page from '../layouts/main'
import KCHeader from './components/KCHeader';
import KCToolbar from './components/KCToolbar';
import KCGestationBoard from './components/KCGestationBoard';
import HamburgerMenu from './components/HamburgerMenu';

import {
    findBoardAction,
    findCardsAction,
    FIND_BOARDS,
    FIND_CARDS,
    MOVE_CARD
} from '../actions/card_actions'

import {
    findBoards,
    findCards
} from '../api/api';


const reducer = (state = {
        boards: [],
        cards: []
    }, action) => {
    switch(action.type) {
        case FIND_BOARDS:
            return {...state, boards: action.payload};
        case FIND_CARDS:
            return {...state, cards: action.payload};
        case MOVE_CARD:
            const updatedCard = action.payload.card;
            const updatedCards = _.map(state.cards, (card) => {
                if(card.id === updatedCard.id) {
                    return updatedCard
                }
                return card;
            });
            return {...state, cards: updatedCards};
        default:
            return state;

    }
};

const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};


class Index extends Component {

    static async getInitialProps({store}) {
        const boards = await findBoards();
        store.dispatch(findBoardAction(boards));

        const cards = await findCards();
        store.dispatch(findCardsAction(cards));
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
                        dispatchAction={this.props.dispatchAction}
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
        }),
        mapDispatchToProps: (dispatch, props) => {
            return {
                dispatchAction: dispatch
            }
        }
    }
)(Index);

export default WrappedIndex;