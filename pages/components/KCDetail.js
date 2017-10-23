import KCTimeline from './KCTimeline';

export default () => (
    <div className="detail-view">

        <KCTimeline/>

        <div className="sku-detail-container">
            <ul>
                <li className="active">PROJECT INFO</li>
                <li>
                    CODE INFO
                    <span className="status"></span>
                </li>
                <li>ROYALTY INFO</li>
                <li>MISCELLANEOUS</li>
                <li>PROJECT INFO</li>
                <li>PROJECT INFO</li>
                <li>PROJECT INFO</li>
                <li>PROJECT INFO</li>
            </ul>

            <div className="header">
                <img src="/static/placeholder-icon.png" className="avatar"/>
                <div className="content">
                    <h2>Kleenex Trusted Care Facial Tissues featuring Disney • Pixar’s Cars 3</h2>
                    <p><span className="date">Date Introduced: </span><span className="date-value">9/27/2017</span></p>
                </div>
            </div>

            <div className="attributes">
                <h2>Attributes</h2>
                <div className="content">
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>
                    <div>
                        <p className="date">Date Introduced: </p>
                        <p className="date-value">9/27/2017</p>
                    </div>

                </div>
            </div>
        </div>

        <style jsx>{`
            .detail-view {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
                box-sizing: border-box;
                padding: 0 32px;
            }

            .sku-detail-container {
                width: 75%;
                height: 100%;
                min-height: 500px;
                border-radius: 4px;
                background-color: #ffffff;
                border: solid 1px #e6eaee;
            }

            .sku-detail-container ul {
                list-style: none;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                margin: 0;
                padding: 0 10px;
                line-height: 38px;
                border-bottom: 1px solid #eff3f6;
            }

            .sku-detail-container ul li {
                font-size: 13px;
                font-weight: 600;
                color: #7f8fa4;
            }

            .sku-detail-container ul li.active {
                border-bottom: 1.5px solid #354052;
                margin-bottom: -1px;
                font-size: 14px;
                font-weight: 600;
                color: #354052;
            }

            .sku-detail-container ul li .status {
                background: url(/static/ic-progress-point-active.svg) 0 0 no-repeat;
                display: inline-block;
                height: 10px;
                width: 10px;
                background-size: contain;
                margin-bottom: 5px;
             }

            .header {
                display: flex;
                flex-direction: row;
                margin: 30px;
            }

            .header .avatar {
                width: 75px;
                height: auto;
            }
            .header .content {
                flex-grow: 1;
            }

            .card-title {
                font-size: 16px;
                font-weight: 600;
                line-height: 1.19;
                text-align: left;
                color: #354052;
            }

            .status, .date {
                font-size: 13px;
                font-weight: 600;
                line-height: 1.46;
                text-align: left;
                color: #273142;
            }

            .status-value, .date-value {
                font-size: 13px;
                font-weight: normal;
                line-height: 1.46;
                text-align: left;
                color: #273142;
                color: #9b9b9b;
            }

            .attributes {
                display: flex;
                flex-direction: column;
                margin: 30px;
            }

            .attributes h2 {
                border-bottom: 1px solid lightblue;
                line-height: 54px;
            }

            .attributes .content {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

            }

            .attributes .content div {
                width:50%;
            }

        `}</style>

    </div>

)