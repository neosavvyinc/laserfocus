import KCTimeline from './KCTimeline';
import Button from './Button';
import SkuInfo from './SkuInfo';

export default () => (
    <div className="detail-view">

        <KCTimeline/>

        <div className="panel-container">
            <section className="panel sku-detail-container">
                <ul>
                    <li className="active">PROJECT INFO</li>
                    <li>
                        CODE INFO
                        <span className="status-icon"></span>
                    </li>
                    <li>ROYALTY INFO</li>
                    <li>MISCELLANEOUS</li>
                    <li>PROJECT INFO</li>
                    <li>PROJECT INFO</li>
                    <li>PROJECT INFO</li>
                    <li>PROJECT INFO</li>
                </ul>

                <div className="header">

                    <Button  />

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
                            <h4 className="text-light">Project Number</h4>
                            <h3 className="text-light">(200,003,023)</h3>
                        </div>
                        <div>
                            <h4 className="text-light">Project Title</h4>
                            <h3 className="text-light">(200,003,023) - Kleenex Disney tissues</h3>
                        </div>

                        <div>
                            <h4 className="text-light">Project Name</h4>
                            <h3>Dinner Rolls</h3>
                        </div>
                        <div>
                            <h4 className="text-light">Project Variant</h4>
                            <h3>(200,003,023) - Kleenex Disney tissues</h3>
                        </div>


                        <div>
                            <h4 className="text-light">Project Number</h4>
                            <h3 className="text-light">(200,003,023)</h3>
                        </div>
                        <div>
                            <h4 className="text-light">Project Title</h4>
                            <h3 className="text-light">(200,003,023) - Kleenex Disney tissues</h3>
                        </div>

                        <div>
                            <h4 className="text-light">Project Name</h4>
                            <h3>Dinner Rolls</h3>
                        </div>
                        <div>
                            <h4 className="text-light">Project Variant</h4>
                            <h3>(200,003,023) - Kleenex Disney tissues</h3>
                        </div>
                    </div>
                </div>
            </section>

            <aside className="project-history">
                <div className="header">
                    <h2>Project History</h2>
                    <select>
                        <option value="All Fields">All Fields</option>
                    </select>
                </div>
                <div className="history-container">
                    <div className="line"></div>
                    <div className="sku-info-container">
                        <SkuInfo/>
                        <SkuInfo/>
                        <SkuInfo/>
                        <SkuInfo/>
                        <SkuInfo/>
                    </div>
                </div>
            </aside>
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

                .panel-container {
                    display: flex;
                    flex-direction: row;
                    flex-wrap: nowrap;
                }

                .project-history {
                    width: 25%;
                    display: flex;
                    flex-direction: column;
                }

                .project-history .header {
                    height: 40px;
                    margin-bottom: 14px;
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-start;
                }
                
                .project-history .header h2 {
                    flex-grow: 1;
                }
                .project-history .header select {
                    width: 40%;
                }

                .project-history .history-container {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                }
                
                .project-history .history-container .line {
                    width: 43px;
                    margin: 0 0 0 11px;
                    height: 100%;
                    border-left: 1px solid #dfe3e9;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                }

                .sku-info-container {
                    position: absolute;
                    right: 0;
                    top: 0;
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                    overflow-y: auto;
                }



                .sku-detail-container {
                    width: 75%;
                    margin-right: 24px;
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

                    .sku-detail-container ul li .status-icon {
                        margin-bottom: 5px;
                     }

                    .sku-detail-container .header {
                        display: flex;
                        flex-direction: row;
                        margin: 30px;
                        align-items: center;
                        position: relative;
                    }

                    .sku-detail-container .header .avatar {
                        width: 75px;
                        height: auto;
                        margin-right: 20px;
                    }
                    .sku-detail-container .header .content {
                        flex-grow: 1;
                    }

                .btn-edit {
                    position:absolute;
                    top: 0;
                    right: 0;
                }

                .card-title {
                    font-size: 16px;
                    font-weight: 600;
                    line-height: 1.19;
                    text-align: left;
                    color: #354052;
                }

                .content > div {
                    margin: 12px 0;
                }

                .content > div h4 {
                    margin: 0 0 6px 0;
                    font-weight: normal;
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