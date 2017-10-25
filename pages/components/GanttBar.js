import React from 'react'

export default class GanttBar extends React.Component {

    render() {
        const multiplier = 3;  // set the width of the bar
        const day = 1;  // set on which day it starts

        const defaultBarWidth = 60;
        const barWidth = defaultBarWidth * multiplier;
        const barLeft = defaultBarWidth * day;

        const style = {
            backgroundColor: '#feca34',
            position: 'absolute',
            top: '-18px',
            left: (barLeft - 1) + 'px',
            height: '36px',
            width: barWidth + 'px'
        }

        return (
            <div style={style}>

            </div>
        )
    }
}