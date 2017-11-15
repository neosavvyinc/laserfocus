export async function findBoards() {
    const res = await fetch('http://localhost:3000/boards/');
    const boards = await res.json();
    return boards;
}

export async function findCards() {
    const res = await fetch('http://localhost:3000/cards/');
    const cards = await res.json();
    return cards;
}

export async function moveCard(card, board) {
    const updatedCard = Object.assign({}, card, {boardId: board.id});
    const res = await fetch(`http://localhost:3000/cards/${card.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedCard)
    });
    await res.json();
    return updatedCard;
}

export async function addCard(card) {
    const res = await fetch(`http://localhost:3000/cards`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(card)
    });

    const cardResult = await res.json();
    return cardResult;
}