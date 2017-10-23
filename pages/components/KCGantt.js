export default () => (
    <div className="detail-view">
        Here is the detail view!
        <a target="_blank"
           href="https://projects.invisionapp.com/share/WJDPFYG6B#/screens/259058626">This is the gantt page</a>

        <div className="chart-container">
            <div className="chart">
                <div className="heading">
                    <div className="project">
                        Projects
                    </div>

                    <div className="date-col">
                        <div className="month">
                            October
                        </div>

                        <div className="day-row">
                            <div className="day">
                                01
                            </div>
                            <div className="day">
                                02
                            </div>
                            <div className="day">
                                03
                            </div>
                            <div className="day">
                                04
                            </div>
                            <div className="day">
                                05
                            </div>
                            <div className="day">
                                06
                            </div>
                            <div className="day">
                                07
                            </div>
                            <div className="day">
                                08
                            </div>
                            <div className="day">
                                09
                            </div>
                            <div className="day">
                                10
                            </div>
                            <div className="day">
                                11
                            </div>
                            <div className="day">
                                12
                            </div>
                            <div className="day">
                                13
                            </div>
                            <div className="day">
                                14
                            </div>
                            <div className="day">
                                15
                            </div>
                            <div className="day">
                                16
                            </div>
                            <div className="day">
                                17
                            </div>
                            <div className="day">
                                18
                            </div>
                            <div className="day">
                                19
                            </div>
                            <div className="day">
                                20
                            </div>
                            <div className="day">
                                21
                            </div>
                        </div>
                    </div>
                </div>

                <div className="data-row">
                    <div className="data-name">
                        Kleenex Everyday Tissues Disney Moana Upright Box
                    </div>
                    <div className="day">
                        02
                    </div>
                    <div className="day">
                        03
                    </div>
                    <div className="day">
                        04
                    </div>
                    <div className="day">
                        05
                    </div>
                    <div className="day">
                        06
                    </div>
                    <div className="day">
                        07
                    </div>
                    <div className="day">
                        08
                    </div>
                    <div className="day">
                        09
                    </div>
                    <div className="day">
                        10
                    </div>
                    <div className="day">
                        11
                    </div>
                    <div className="day">
                        12
                    </div>
                    <div className="day">
                        13
                    </div>
                    <div className="day">
                        14
                    </div>
                    <div className="day">
                        15
                    </div>
                    <div className="day">
                        16
                    </div>
                    <div className="day">
                        17
                    </div>
                    <div className="day">
                        18
                    </div>
                    <div className="day">
                        19
                    </div>
                    <div className="day">
                        20
                    </div>
                    <div className="day">
                        21
                    </div>
                </div>
            </div>

        </div>


        <style jsx>{`
            .chart-container {
                margin: 20px;
                //overflow: auto;
            }
            .chart {
                width: 100%;
                overflow: auto;
            }
            .heading {
                display: flex;
                flex-direction: row;
                justify-content: center;
            }
            .heading div {
                border: 1px solid #dfe3e9;
            }
                .project {
                    height: 64px;
                    min-width: 220px;
                    -webkit-align-self: center;
                    -ms-flex-item-align: center;
                    align-self: center;
                    -webkit-box-pack: center;
                    -webkit-justify-content: center;
                    -ms-flex-pack: center;
                    justify-content: center;
                    padding: 0 20px;
                }

                .date-col {
                    height: 66px;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
                }
                    .month {
                        width: 100%;
                        padding: 10px 20px;
                    }
                    .day-row {
                        width: 260px;
                        display: flex;
                        flex-direction: row;
                    }
                        .day {
                            padding: 10px 0 20px 20px;
                            min-width: 45px;
                            flex-direction: row;
                            //height: 44px;
                            justify-content: flex-start;
                        }

            .data-row {
                display: flex;
                flex-direction: row;
            }
            .data-row div {
                border: 1px solid lightgray;
            }
                .data-name {
                    min-width: 220px;
                    padding: 10px 20px;
                }

        `}</style>

    </div>

)