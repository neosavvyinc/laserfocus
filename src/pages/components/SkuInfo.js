import React, {Component} from 'react';

export default class SkuInfo extends Component {

    render() {

        const {item} = this.props;

        return (

            <div className="sku-info">
                <div className="top">
                    <div className="indicator">
                        <span className="status-icon"></span>
                    </div>
                    <div className="panel main">
                        <div className="nub"></div>
                        <p className="text-emphasis">{item.name}</p>
                        <p className="text-14 text-emphasis text-light">{item.title}</p>
                    </div>
                </div>

                <div className="panel sub">
                    <p className="text-light text-med">{item.statusDate}</p>
                    <p className="text-15">{item.status}</p>
                </div>

                <style jsx>{`

                            .sku-info {
                                margin-bottom: 12px;
                                display: flex;
                                align-items: flex-end;
                                flex-direction: column;
                                min-height: 0;
                                height: auto;
                            }

                            .sku-info .top {
                                display: -webkit-box;
                                display: -webkit-flex;
                                display: -ms-flexbox;
                                display: flex;
                                -webkit-flex-direction: row;
                                -ms-flex-direction: row;
                                flex-direction: row;
                                -webkit-align-items: center;
                                -webkit-box-align: center;
                                -ms-flex-align: center;
                                align-items: center;
                                width: 100%;
                            }
                                .sku-info .top .indicator {
                                    width: 18px;
                                    height: 18px;
                                }
                                    .sku-info .top .indicator .status-icon {
                                        height: 100%;
                                        width: 100%;
                                    }

                                .sku-info .panel.main {
                                    position: relative;
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: flex-start;
                                    min-height: 0;
                                    flex-grow: 1;
                                    padding: 12px;
                                    margin-left: 11px;
                                    border-bottom: none;
                                    border-bottom-right-radius: 0;
                                    border-bottom-left-radius: 0;
                                }
                                    .sku-info .panel.main .nub {
                                        position: absolute;
                                        z-index: 3;
                                        margin: auto;
                                        top: 45%;
                                        left: -1.2%;
                                        width: 6px;
                                        height: 6px;
                                        transform: rotate(135deg);
                                        border-right: 1px solid #e6eaee;
                                        border-bottom: 1px solid #e6eaee;
                                        background-color: white;
                                    }

                                .sku-info .panel.sub {
                                    min-height: 0;
                                    height: auto;
                                    width: 91%;
                                    justify-self: flex-end;
                                    padding: 12px;

                                    border-top: 1px solid #e6eaee;
                                    border-top-left-radius: 0;
                                    border-top-right-radius: 0;
                                    background-color: #fafbfc;
                                }


                        `}</style>
            </div>
        )
    }
}