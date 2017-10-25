import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './board/BoardConstants';
import { DragSource } from 'react-dnd';

const cardSource = {
    beginDrag(props) {
        return {};
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
        const card = this.props.card;
        return connectDragSource(<div className="card">
            <span className="left status-bar"></span>
            <p className="card-title">{card.productDescription}</p>
            <p><span className="status">Status: </span><span className="status-value">{card.status}</span></p>
            <p><span className="date">Date Introduced: </span><span className="date-value">{card.date}</span></p>
            <span className="date-value"><img src="/static/placeholder-icon.png" className="avatar"/>{card.owner}</span>


            <style jsx>{`

        .card {
            margin: 13px 0 0 0;
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

        .status-bar {
            width: 36px;
            height: 6px;
            margin-bottom: .4em;
            border-radius: 3px;
            background-color: #feca34;
        }


        .card-title {
            font-family: 'Source Sans Pro';
            font-size: 16px;
            font-weight: 600;
            line-height: 1.19;
            text-align: left;
            color: #354052;
        }

        .status, .date {
            font-family: 'Source Sans Pro';
            font-size: 13px;
            font-weight: 600;
            line-height: 1.46;
            text-align: left;
            color: #273142;
        }

        .status-value, .date-value {
            font-family: 'Source Sans Pro';
            font-size: 13px;
            font-weight: normal;
            line-height: 1.46;
            text-align: left;
            color: #273142;
            color: #9b9b9b;
        }

        .avatar {
            margin-top: .4em;
            align-self: flex-start;
        }

        `}</style>
        </div>);
    }
}

export default DragSource(ItemTypes.CARD, cardSource, collect)(Card);
