export default () => (
    <div className="card">
        <div className="left status-bar"><p>.</p></div>
        <p className="left card-title">Kleenex Mona Upright Tissue Box</p>
        <p className="left"><span className="status">Status: </span><span className="status-value">New</span></p>
        <p className="left"><span className="date">Date Introduced: </span><span className="date-value">9/27/2017</span></p>

        <style jsx>{`

        .left {
            align-self: flex-start;
            margin: 0 0 0 0;
        }

        .card {
            margin: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-content: left;
            align-items: center;
            width: 80%;
            height: 140px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #e6eaee;
        }

        .status-bar {
            width: 36px;
            height: 6px;
            border-radius: 3px;
            background-color: #feca34;
        }

        .card-title {

            width: 236px;
            height: 19px;
            font-family: 'Source Sans Pro';
            font-size: 16px;
            font-weight: 600;
            line-height: 1.19;
            text-align: left;
            color: #354052;
        }

        .status, .date {
            width: 151px;
            height: 19px;
            font-family: 'Source Sans Pro';
            font-size: 13px;
            font-weight: 600;
            line-height: 1.46;
            text-align: left;
            color: #273142;
        }

        .status-value, .date-value {
            width: 151px;
            height: 19px;
            font-family: 'Source Sans Pro';
            font-size: 13px;
            font-weight: normal;
            line-height: 1.46;
            text-align: left;
            color: #273142;
            color: #9b9b9b;
        }

        `}</style>
    </div>

)