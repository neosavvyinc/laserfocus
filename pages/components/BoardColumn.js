import Card from './Card';

export default () => (
    <div className="column">
        <span className="title">
            <h2>Sales & Planning </h2>
            <span className="count">(2)</span>
        </span>
        <div className="contents">
            <Card/>
            {/*<Card/>*/}
        </div>


        <style jsx>{`
            .column {
                min-width: 320px;
                height: 100%;
            }

            .title h2 {
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                color: #354052;
                display: inline-block;
                padding-right: 6px;
            }

            .title .count {
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                color: #7f8fa4;
            }

            .contents {
                padding: 0 10px 10px;
                box-sizing: border-box;
                width: auto;
                border-radius: 4px;
                background-color: #f7f9fb;
                border: solid 1px #e6eaee;
                border-top: 3px solid #feca34;
                border-top-left-radius: 0;
                border-top-right-radius: 0;
            }

        `}
        </style>
    </div>
)