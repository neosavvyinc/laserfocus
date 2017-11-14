import KCNavBar from './KCNavBar'


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

            <KCNavBar/>

            { hideAdd ?
                <div></div>:
                <button className="btn blue" onClick={onAdd}>+&nbsp;&nbsp;Add New SKU</button>
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
            width: auto;
            height: 36px;
            border-radius: 4px;
            background-color: #1e9fcf;
            cursor: pointer;
            color: #ffffff;
            line-height: 2em;
            padding: 0 20px;
        }


        `}
        </style>
    </div>)
}