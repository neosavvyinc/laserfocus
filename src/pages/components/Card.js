import React, { Component } from 'react';
import { Link } from '../../routes';
import { ItemTypes } from './board/BoardConstants';
import { DragSource } from 'react-dnd';

const cardSource = {
    beginDrag(props) {
        return {
            card: props.card
        };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
};

class Card extends Component {

    render() {
        const { connectDragSource, isDragging } = this.props;
        const {
            card,
            board
        } = this.props;

        let deptClass = 'dept-bar ';

        return connectDragSource(<div className="card">
            {/*<span className={deptClass += board.departmentClass}></span>*/}
            <Link route="detail" params={{id: card.id}}><p className="text-emphasis">{card.productDescription}</p></Link>
            <p><span className="text-med text-emphasis">Status: </span><span className="text-light">{card.status}</span></p>
            <p><span className="text-med text-emphasis">Date Introduced: </span><span className="text-light">{card.date}</span></p>
            <span className="avatar text-med text-emphasis"><img
                src="/static/images/user-avatar.png"
                srcSet="/static/images/user-avatar@2x.png 2x, /static/images/user-avatar@3x.png 3x"/>{card.owner}</span>


            <style jsx>{`

            .card {
                margin-bottom: 10px;
                padding: 13px 10px;
                display: flex;
                flex-direction: column;
                align-items: left;
                max-width: 320px;
                min-height: 155px;
                border-radius: 4px;
                background-color: #ffffff;
                border: solid 1px #e6eaee;
                box-sizing: border-box;
            }
                p {
                    line-height: 1.5em;
                }

            .dept-bar {
                width: 36px;
                height: 6px;
                margin-bottom: .4em;
                border-radius: 3px;
            }

            .avatar {
                display: flex;
                flex-direction: row;
                align-items: center;
                margin-top: .4em;
                align-self: flex-start;
            }
             .avatar img {
                margin-right: 6px;
             }

            `}</style>
        </div>);
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
