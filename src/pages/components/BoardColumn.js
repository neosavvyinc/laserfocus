import _ from 'lodash'
import React, { Component } from 'react';
import { ItemTypes } from './board/BoardConstants';
import { DropTarget } from 'react-dnd';

import Card from './Card';
import {
    moveCard
} from "../../api/api";

import {
    moveCardToBoardAction
} from "../../actions/card_actions";

const boardColumnTarget = {
    drop(props, monitor) {
        const dragItem = monitor.getItem();
        moveCard(dragItem.card, props.board).then((response) => {
            const updatedCard = response
            props.dispatchAction(moveCardToBoardAction(updatedCard))
        });
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

class BoardColumn extends Component {

    render() {
        const { connectDropTarget, isOver } = this.props;
        let deptClass = ('dept ' + this.props.board.departmentClass);

        return connectDropTarget(
            <div className="column">
                <span className="title">
                    <p className="text-emphasis">{this.props.board.name}</p>
                    <span className="count">({`${_.size(this.props.cards)}`})</span>
                </span>
                <div className={deptClass} />
                <div className={ isOver ? 'contents dragging' : 'contents' }>
                    {
                        _.map(this.props.cards, (card) => {
                            return <Card
                                key={card.id}
                                card={card}
                                board={this.props.board}
                            />
                        })
                    }
                </div>


                <style jsx>{`
                    .column {
                        min-width: 320px;
                        margin: 13px 32px 0 0;
                        overflow: hidden;
                        display: flex;
                        flex-direction: column;
                    }

                    .title p {
                        margin: 14px 0;
                        display: inline-block;
                        padding-right: 6px;
                    }

                    .title .count {
                        font-size: 16px;
                        font-weight: 600;
                        color: #7f8fa4;
                    }

                    .dept {
                        height: 3px;
                        width: 100%;
                    }

                    .contents {
                        position: relative;
                        padding: 10px 10px 0;
                        box-sizing: border-box;
                        width: auto;
                        border-radius: 4px;
                        background-color: #f7f9fb;
                        border: solid 1px #e6eaee;
                        border-top: none;
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                        min-height: 201px;
                        overflow-y: auto;
                        cursor: pointer;
                        z-index: 2;
                    }
                        .contents:before {
                            content: 'Drop here';
                            position: absolute;
                            top: 0;
                            left: 0;
                            //height: 100%;
                            width: 100%;
                            margin: 81px 0 0 0;
                            text-align: center;
                            z-index: -1;
                        }


               `}
                </style>
            </div>
        )
    };
}

export default DropTarget(ItemTypes.CARD, boardColumnTarget, collect)(BoardColumn);
