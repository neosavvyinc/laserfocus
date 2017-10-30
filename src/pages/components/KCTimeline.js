/*
    Of course, this bit is simple enough now that you can jsut loop over an array of progress points
    and append the 'active' class to the current progress point when it is selected
*/

export default () => (
    <div className="timeline-container">
        <div className="ic-progress-point active">
            <p>Sales Planning / Timeline</p>
            <div className="dot" />
        </div>
        <div className="ic-progress-point">
            <p>Distribution</p>
            <div className="dot" />
        </div>
        <div className="ic-progress-point">
            <p>Finance</p>
            <div className="dot" />
        </div>
        <div className="ic-progress-point">
            <p>Approval</p>
            <div className="dot" />
        </div>

        <style jsx>
            {`
                .timeline-container {
                    width: 100%
                    height: 62px;
                    margin: 20px 0;
                    position: relative;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                }

                .timeline-container:after {
                    width: 100%;
                    height: 4px;
                    border-radius: 3px;
                    background-color: #d2d8df;
                    position: absolute;
                    top: 42px;
                    left: 0;
                    content: '';
                }

                .ic-progress-point {
                    position: relative;
                    height: 100%;
                    display: flex;;
                    justify-content: center;
                    align-items: flex-end;
                }
                .ic-progress-point:first-of-type {
                    justify-content: flex-start;
                }
                .ic-progress-point:last-of-type {
                    justify-content: flex-end;
                }

                .ic-progress-point > p {
                    font-weight: 600;
                    color: #7f8fa4;
                    margin-bottom: 37px;
                }
                .ic-progress-point .dot {
                    border-radius: 50%;
                    width: 24px;
                    height: 24px;
                    background-color: #eff3f6;
                    border: solid 3px #d2d8df;
                    position: absolute;
                    top: 50%;
                    left: auto;
                    content: '';
                    z-index: 1;
                }
                .ic-progress-point .dot:before {
                    width: 2px;
                    height: 100%;
                    background-color: #eff3f6;
                    position: absolute;
                    top: 0;
                    left: -5px;
                    content: '';
                    z-index: 1;
                }
                .ic-progress-point .dot:after {
                    width: 2px;
                    height: 100%;
                    background-color: #eff3f6;
                    position: absolute;
                    top: 0;
                    right: -5px;
                    content: '';
                    z-index: 1;
                }

                .ic-progress-point.active .dot {
                    height: 24px;
                    width: 24px;
                    border: none;
                    content: url('/static/svg/ic-progress-point-active.svg');
                }
            `}
        </style>
    </div>
)