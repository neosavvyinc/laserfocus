import Card from './Card';

export default () => (
    <div className="column">
        <span className="title">Sales & Planning </span>
        <span className="count">(2)</span>
        <p className="status-color"/>
        <div className="contents">
            <Card/>
            {/*<Card/>*/}
        </div>


        <style jsx>{`
            .column {
                padding-top: 20px;
                padding-left: 10px;
                padding-right: 10px;
                padding-bottom: 20px;
                margin: auto;
                width: 380px;
                height: 100%;
            }

            .title {
                width: 174px;
                height: 20px;
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: #354052;
            }

            .count {
                width: 19px;
                height: 20px;
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: #7f8fa4;
            }


            .status-color {
                width: 100%;
                height: 3px;
                background-color: #feca34;
                margin-bottom: 0px
            }

            .contents {
                padding-top: 20px;
                width: 100%
                height: 100%;
                min-height: 650px;
                border-radius: 4px;
                background-color: #f7f9fb;
                border: solid 1px #e6eaee;
            }

        `}
        </style>
    </div>
)