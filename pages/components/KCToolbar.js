export default () => (
    <div className="toolbar">

        <div className="toolbar-contents">

            <h1 className="title">SKU Life Cycle Management</h1>

            <div className="search-input">
                <input className="hidden-search" placeholder="Search"/>
                <img src="/static/ic-search.png"
                     srcSet="/static/ic-search@2x.png 2x,/static/ic-search@3x.png 3x"
                     className="magnify-icon"/>
            </div>

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

        .search-input {
            margin: 0 20px 0 0;
            width: 270px;
            height: 34px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #dfe3e9;
            display: flex;
            align-items: center;
        }

        .hidden-search {
            width: 225px;
            padding-left: 10px
            padding-right: 10px
            height: 85%;
            opacity: 0.5;
            font-family: 'Source Sans Pro';
            font-size: 14px;
            line-height: 1.36;
            text-align: left;
            border: 0px solid;
            outline: none;
        }

        .magnify-icon {
            width: 20px;
            height: 20px;
            object-fit: contain;
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