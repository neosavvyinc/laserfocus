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
                margin: auto;
                width: 320px;
                height: 674px;
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
                width: 320px;
                height: 3px;
                background-color: #feca34;
            }

            .contents {
                width: 320px;
                height: 600px;
                border-radius: 4px;
                background-color: #f7f9fb;
                border: solid 1px #e6eaee;
            }

        `}
        </style>
    </div>
)