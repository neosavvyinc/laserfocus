import GanttBar from './GanttBar';
import GanttFooter from './GanttFooter';

export default () => (

    <section className="detail-view">

        <div className="chart-container">
            <div className="scrollable-div">
                <table>
                    <tbody>
                    <tr className="tr-month">
                        <td rowSpan="2" className="first">
                            Projects
                        </td>

                        <td className="td-month" colSpan="100">
                            October
                        </td>
                    </tr>


                    <tr className="tr-month">
                        <td>
                            01
                        </td>
                        <td>
                            02
                        </td>
                        <td>
                            03
                        </td>
                        <td>
                            04
                        </td>

                        <td className="daily">
                            05
                        </td>
                        <td>
                            06
                        </td>
                        <td>
                            07
                        </td>
                        <td>
                            08
                        </td>
                        <td>
                            09
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            11
                        </td>
                        <td className="daily">
                            12
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            14
                        </td>
                        <td>
                            15
                        </td>
                        <td>
                            16
                        </td>
                        <td>
                            17
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            19
                        </td>
                        <td>
                            20
                        </td>
                        <td>
                            21
                        </td>

                    </tr>


                    <tr className="tr-bar">
                        <td className="first">
                            Kleenex Everyday Tissues Disney Moana Upright Box
                        </td>
                        <td>
                            <div id="1" className="bar">
                                <GanttBar/>
                            </div>
                        </td>

                        <td>
                        </td>
                        <td>
                            03
                        </td>
                        <td>
                            04
                        </td>
                        <td className="daily">
                            05
                        </td>
                        <td>
                            06
                        </td>
                        <td>
                            07
                        </td>
                        <td>
                            08
                        </td>
                        <td>
                            <div id="2" className="bar">
                                <div className="dist fill"></div>
                            </div>
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            11
                        </td>
                        <td className="daily">
                            12
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            14
                        </td>
                        <td>
                            15
                        </td>
                        <td>
                            16
                        </td>
                        <td>
                            17
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            19
                        </td>
                        <td>
                            20
                        </td>
                        <td>
                            21
                        </td>
                    </tr>


                    <tr className="tr-bar">
                        <td className="first">
                            Kleenex® Soothing Lotion Tissues
                        </td>

                        <td>
                            01
                        </td>

                        <td>
                            <div id="3" className="bar">
                                <div className="dist fill"></div>
                            </div>
                        </td>

                        <td>
                            <div id="4" className="bar">
                                <div className="dist fill"></div>
                            </div>
                        </td>

                        <td>
                            04
                        </td>
                        <td className="daily">
                            05
                        </td>
                        <td>
                            06
                        </td>
                        <td>
                            07
                        </td>
                        <td>
                            08
                        </td>
                        <td>
                            09
                        </td>
                        <td>
                            10
                        </td>
                        <td>
                            11
                        </td>
                        <td className="daily">
                            12
                        </td>
                        <td>
                            13
                        </td>
                        <td>
                            14
                        </td>
                        <td>
                            15
                        </td>
                        <td>
                            16
                        </td>
                        <td>
                            17
                        </td>
                        <td>
                            18
                        </td>
                        <td>
                            19
                        </td>
                        <td>
                            20
                        </td>
                        <td>
                            21
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <GanttFooter/>


    <style jsx>{`

            section {
                display: flex;
                flex-direction: column;
            }

            .chart-container {
                height: 100%;
                margin: 32px;
                flex-grow: 1;
            }

            .scrollable-div {
                height: calc(100vh - 300px);
                overflow: auto;
            }

            table {
                border: 1px solid #e6eaee;
                border-spacing: 0;
                background-color: white;
            }

            tr.tr-month,
            tr.tr-month td {
                font-weight: 600;
            }

            td.first {
                min-width: 300px;
                max-width: 300px;
                padding-left: 20px;
                text-align: left;
                vertical-align: middle;
            }
            td.td-month {
                text-align: left;
                font-weight: 600;
                padding-left: 20px;
            }

            td.daily {
                background-color: #f7f9fb;
            }

            td {
                border-bottom: 1px solid #e6eaee;
                border-right: 1px solid #e6eaee;
                height: 45px;
                text-align: center;
                vertical-align: middle;;
            }

            tr.tr-bar td {
                height: 90px;
                min-width: 60px !important;
                max-width: 60px !important;
            }

            tr.tr-bar td .bar {
                border-right: none;
                position: relative;
            }



            // width of hard-coded bars, these are examples
            tr.tr-bar td .bar .fill {
                position: absolute;
                top: -18px;
                width: 60px;
            }
            // hard-coded fills, these are examples
            .fill {
                height: 36px;
                width: 100%;
                left: -1px;
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

        `}</style>
    </section>

)
