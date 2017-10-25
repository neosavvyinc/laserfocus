import _ from 'lodash'
import React, { Component } from 'react';
import { ItemTypes } from './board/BoardConstants';
import { DropTarget } from 'react-dnd';

import Card from './Card';

const squareTarget = {
    drop(props) {
        //update our state / store
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

        return connectDropTarget(
            <div className="column">
                <span className="title">
                    <p className="text-emphasis">{this.props.board.name}</p>
                    <span className="count">(2)</span>
                </span>
                <div className={ isOver ? 'contents-red' : 'contents'}>
                    {
                        _.map(this.props.cards, (card) => {
                            return <Card
                                card={card}
                            />
                        })
                    }
                </div>


                <style jsx>{`
                    .column {
                        min-width: 320px;
                        height: 100%;
                    }

                    .title p {
                        margin: 14px 0;
                        display: inline-block;
                        padding-right: 6px;
                    }

                    .title .count {
                        font-family: 'Source Sans Pro';
                        font-size: 16px;
                        font-weight: 600;
                        color: #7f8fa4;
                    }

                    .contents {
                        padding: 0 10px 10px;
                        box-sizing: border-box;
                        width: auto;
                        border-radius: 4px;
                        background-color: #f7f9fb;
                        border: solid 1px #e6eaee;
                        border-top: 3px solid #feca34;
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }

                    .contents-red {
                        padding: 0 10px 10px;
                        box-sizing: border-box;
                        width: auto;
                        border-radius: 4px;
                        background-color: #0f0f0f;
                        border: solid 1px #e6eaee;
                        border-top: 3px solid #feca34;
                        border-top-left-radius: 0;
                        border-top-right-radius: 0;
                    }

               `}
                </style>
            </div>
        )
    };
}

export default DropTarget(ItemTypes.CARD, squareTarget, collect)(BoardColumn);
