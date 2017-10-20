export default () => (
    <div className="timeline-container">


        <div className="timeline-labels">
            <div className="labeled-point-start">
                <span className="t1 left">Sales Planning / Timeline</span>
                <p className="t1-point left"/>
            </div>
            <div className="labeled-point-mid">
                <span className="t2 center">Distribution</span>
                <p className="t1-point center"/>
            </div>
            <div className="labeled-point-mid">
                <span className="t3 center">Finance</span>
                <p className="t1-point center"/>
            </div>
            <div className="labeled-point-end">
                <span className="t4 right">Approval</span>
                <p className="t1-point right"/>
            </div>
        </div>
        <div className="timeline"/>


        <style jsx>
            {`
                .timeline-container {
                    width: 100%
                    height: 120px;
                }

                .timeline-labels {
                    display: flex;
                    flex-direction: row;
                }

                .timeline {
                    width: 100%;
                    height: 4px;
                    border-radius: 3px;
                    background-color: #d2d8df;
                    float: -100px;
                }

                .t1, .t2, .t3, .t4 {

                    height: 20px;
                    font-family: 'Source Sans Pro';
                    font-size: 16px;
                    font-weight: 600;
                    text-align: center;
                    color: #7f8fa4;
                }

                .t1-point {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    background-color: #eff3f6;
                    border: solid 3px #d2d8df;
                }

                .labeled-point-start {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 17;
                }

                .labeled-point-mid {
                    display: flex;
                    flex-direction: column;
                    flex-grow: 25;
                }

                .labeled-point-end {
                    flex-grow: 17;
                    display: flex;
                    flex-direction: column;
                    align-self: flex-end;
                }

                .left {
                    align-self: flex-start
                }

                .center {
                    margin: auto;
                }

                .right {
                    align-self: flex-end
                }


            `}
        </style>
    </div>
)