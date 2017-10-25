import KCTimeline from './KCTimeline';
import Button from './Button';

export default () => (
    <div className="detail-view">

        <KCTimeline/>

        <div className="panel-container">
            <section className="panel sku-detail-container">
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
                <div className="top">
                    <h2>Project History</h2>
                    <Button />
                </div>
                <div className="bottom">
                    <div className="line"></div>
                    <div className="sku-info-panel">
                        <div className="panel sku-info">
                        </div>
                        <div className="panel sku-info"></div>
                        <div className="panel sku-info"></div>
                        <div className="panel sku-info"></div>
                        <div className="panel sku-info"></div>
                        <div className="panel sku-info"></div>
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


                .sku-detail-container {
                    width: 75%;
                    margin-right: 24px;
                }

                .project-history {
                    width: 25%;
                    padding: 0 10px;
                    display: flex;
                    flex-direction: column;
                }

                .project-history .top {
                    height: 40px;
                    margin-bottom: 14px;
                }

                .project-history .bottom {
                    flex-grow: 1;
                    display: flex;
                    flex-direction: row;
                    position: relative;
                }

                .project-history .bottom .line {
                    width: 3px;
                    margin: 0 13px;
                    height: 100%;
                    background-color: #dfe3e9;
                    position: absolute;
                    left: 0;
                    top: 0;
                    bottom: 0;
                    height: 100%;
                }

                .sku-info-panel {
                    position: absolute;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    height: 100%;
                    overflow: hidden;
                    overflow-y: auto;
                    display: flex;
                    flex-direction: column;
                }

                .project-history .bottom .panel {
                    min-height: 100px;
                    width: 280px;
                    background-color: white;
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 12px;
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
                    align-items: center;
                    position: relative;
                }

                .header .avatar {
                    width: 75px;
                    height: auto;
                    margin-right: 20px;
                }
                .header .content {
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