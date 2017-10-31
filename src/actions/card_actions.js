export const FIND_BOARDS = 'FIND_BOARDS'
export function findBoardAction(boards) {
    return {
        type: 'FIND_BOARDS',
            payload: boards
    }
}

export const FIND_CARDS = 'FIND_CARDS';
export function findCardsAction( cards ) {
    return {
        type: FIND_CARDS,
            payload: cards
    }
}

export const MOVE_CARD = 'MOVE_CARD';
export function moveCardToBoardAction( card ) {
    return {
        type: MOVE_CARD,
        payload: {
            card
        }
    }
}

export const ADD_CARD = 'ADD_CARD';
export function addNewCardAction( card ) {
    return {
        type: ADD_CARD,
        payload: {
            card
        }
    }
}