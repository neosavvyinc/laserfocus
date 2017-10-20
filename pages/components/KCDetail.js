import KCTimeline from './KCTimeline';

export default () => (
    <div className="detail-view">

        <KCTimeline/>

        <div className="sku-detail-container">
        </div>

        <style jsx>{`
            .detail-view {
                display: flex;
                flex-direction: column;
                width: 100%;
                height: 100%;
            }

            .sku-detail-container {
                width: 75%;
                height: 100%;
                min-height: 500px;
                border-radius: 4px;
                background-color: #ffffff;
                border: solid 1px #e6eaee;
            }


        `}</style>

    </div>

)