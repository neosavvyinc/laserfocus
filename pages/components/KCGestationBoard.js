import BoardColumn from './BoardColumn';

import React, { Component } from 'react';

import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import _ from 'lodash';

class KCGestationBoard extends Component {
    render() {
        return <div className="board">


            {
                _.map(this.props.boards, (board) => {
                    return <BoardColumn
                        key={board.id}
                        board={board}
                        dispatchAction={this.props.dispatchAction}
                        cards={_.filter(this.props.cards, (c) => { return c.boardId === board.id })}
                    />
                })
            }


            <style jsx>{`
                .board {
                    margin: 0 32px;
                    padding-bottom: 32px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }
            `}
            </style>
        </div>
    }
}

export default DragDropContext(HTML5Backend)(KCGestationBoard)