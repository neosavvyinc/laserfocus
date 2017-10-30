export default () => (

    <div className="sticky-footer">
        <div className="legend">
            <div className="sales fill"></div>
            <span>Sales Planning / Timeline</span>

            <div className="dist fill"></div>
            <span>Distribution</span>

            <div className="fin fill"></div>
            <span>Finance</span>

            <div className="approval fill"></div>
            <span>Approval</span>
        </div>

        <div className="date-toggle">
            <div className="days selected">Days</div>
            <div className="week">Week</div>
            <div className="month">Month</div>
        </div>

        <style jsx>{`
            .sticky-footer {
                height: 60px;
                width: calc(100% - 2px);
                border: 1px solid #dfe3e9;
                display: flex;
                flex-direction: row;
                align-content: center;
            }

            .sales {
                background-color: #feca34;
            }
            .dist {
                background-color: #00aaff;
            }
            .fin {
                background-color: #1bb934;
            }
            .approval {
                background-color: #303a71;
            }

            .legend  {
                display: flex;
                flex-direction: row;
                align-items: center;
                flex-grow: 1;
                height: 52px;
                padding: 0 0 0 32px;
            }

            .legend div {
                width: 40px;
                height: 30px;
                display: inline-block;
                margin: 0 9px 0 0;
                border: 1px solid #dfe3e9;
            }
            .legend span {
                margin-right: 32px;
            }

            .date-toggle {
                border: 1px solid #dfe3e9;
                border-radius: 4px;
                display: flex;
                flex-direction: row;
                height: 40px;
                margin: 10px 32px 0 0;
            }
            .date-toggle div {
                padding: 0 20px;
                height: 100%;
                border-right: 1px solid #dfe3e9;
                background-color: white;
                display: flex;
                align-items: center;
                font-size: 14px;
            }
            .date-toggle div.selected {
                font-size: 14px;
                font-weight: 600;
                background-color: #dfe3e9;
            }

            .date-toggle div:last-of-type {
                border: none;
            }

        `}</style>

    </div>
)
