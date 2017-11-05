export default ({ onClickAdd, hideAdd = false }) => {

    const onAdd = () => {
        onClickAdd()
    };

    return (<div className="toolbar">

        <div className="toolbar-contents">
            <div className="title-group">
                <span className="top">
                    <p className="text-24">SKU Life Cycle Management</p>
                    <span className="breadcrumbs">
                        <h1>Gestation</h1>
                    </span>
                </span>
                <p className="text-light">Project Management Associate Dashboard</p>
            </div>

            { hideAdd ?
                <div></div>:
                <div className="quick-add-sku-btn" onClick={onAdd}>
                    <img className="plus-icon"/>
                    <span className="quick-add-btn-txt">Add New SKU</span>
                </div>
            }
        </div>


        <p className="toolbar-separator"/>

        <style jsx>{`
        .toolbar {
            width: auto;
            height: 100px;
            margin: 0 32px;
            border-bottom: 1.5px solid #dfe3e9;
        }

        .toolbar-contents {
            height: inherit;
            display: flex;
            align-items: center;
        }

        .title-group {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
        }
            .title-group .top {
                display: flex;
                flex-direction: row;
            }

        .breadcrumbs {
            background: url(/static/svg/ic-right.svg) no-repeat 0 0;
            display: flex;
            flex-direction: row;
            flex-grow: 1;
            margin: 4px 0 0 6px;
            padding-left: 25px;
        }


        .quick-add-sku-btn {
            margin: auto;
            align-self: flex-end;
            display: flex;
            width: 130px;
            height: 36px;
            border-radius: 4px;
            background-color: #1e9fcf;
            cursor: pointer;
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
            font-size: 14px;
            line-height: 1.36;
            text-align: center;
            color: #ffffff;
        }


        `}
        </style>
    </div>)
}