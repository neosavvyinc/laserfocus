export default () => (
    <div className="toolbar">

        <div className="toolbar-contents">

            <h1 className="title">SKU Life Cycle Management</h1>

            <div className="quick-add-sku-btn">
                <img className="plus-icon"/>
                <span className="quick-add-btn-txt">Add New SKU</span>
            </div>
        </div>


        <p className="toolbar-separator"/>

        <style jsx>{`
        .toolbar {
            width: 100%;
            height: 100px;
            border-bottom: 1.5px solid #dfe3e9;
        }

        .toolbar-contents {
            height: inherit;
            margin: 0 32px;
            display: flex;
            align-items: center;
        }

        h1 {
            flex-grow: 1;
        }


        .quick-add-sku-btn {
            margin: auto;
            align-self: flex-end;
            display: flex;
            width: 130px;
            height: 36px;
            border-radius: 4px;
            background-color: #1e9fcf;
        }

        .plus-icon {
            margin: auto;
            width: 10px;
            height: 10px;
            background-color: #ffffff;
        }

        .quick-add-btn-txt {
            margin: auto;
            width: 81px;
            height: 19px;
            font-family: 'Source Sans Pro';
            font-size: 14px;
            line-height: 1.36;
            text-align: center;
            color: #ffffff;
        }


        `}
        </style>
    </div>


)