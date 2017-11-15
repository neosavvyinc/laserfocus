import React, {Component} from 'react';
import {createStore} from "redux";
import 'isomorphic-fetch'

import withRedux from "next-redux-wrapper";

import Page from '../layouts/main'
import AddIMFProjectModal from './components/modals/AddIMFProjectModal';
import KCGestationBoard from './components/KCGestationBoard';
import KCToolbar from '../pages/components/KCToolbar';

import {
    findBoardAction,
    findCardsAction,
    addNewCardAction,
    FIND_BOARDS,
    FIND_CARDS,
    MOVE_CARD,
    ADD_CARD
} from '../actions/card_actions'

import {
    findBoards,
    findCards,
    addCard
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
        case ADD_CARD:
            const card = action.payload.card;
            return {...state, cards: state.cards.concat(card)};
        default:
            return state;

    }
};

const makeStore = (initialState) => {
    return createStore(reducer, initialState);
};


class Index extends Component {

    constructor() {
        super();
        this.state = {
            showAddProjectModal: false
        }
    }

    static async getInitialProps({store}) {
        const boards = await findBoards();
        store.dispatch(findBoardAction(boards));

        const cards = await findCards();
        store.dispatch(findCardsAction(cards));
        return {};

    }

    onShowClicked = () => {
        this.setState({
            showAddProjectModal: true
        });
    };

    onCloseClicked = () => {
        this.setState({
            showAddProjectModal: false
        });
    };

    onAddClicked = () => {
        this.onShowClicked();
    };

    onAddCompleted = async () => {
        const newCard = {
            "boardId": 1,
            "productDescription": "New Card",
            "status": "New",
            "date": "9/27/2017",
            "owner": "Adam Parrish"
        };

        const result = await addCard(newCard);
        const action = addNewCardAction(result);
        this.props.dispatchAction(action);
        this.onCloseClicked();
    };

    render() {

        return <Page>
                    <KCToolbar
                        onClickAdd={this.onAddClicked}
                    />
                    <AddIMFProjectModal
                        show={this.state.showAddProjectModal}
                        onAdd={this.onAddCompleted}
                        onClose={this.onCloseClicked}
                    />
                    <KCGestationBoard

                        boards={this.props.boards}
                        cards={this.props.cards}
                        dispatchAction={this.props.dispatchAction}
                    />
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