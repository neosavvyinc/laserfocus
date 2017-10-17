export default () => (
    <div className="toolbar">

        <div className="toolbar-contents">

            <span className="title">SKU Life Cycle Management</span>

            <div className="search-input">
                <input className="hidden-search" placeholder="Search"/>
                <img src="/static/ic-search.png"
                     srcset="/static/ic-search@2x.png 2x,/static/ic-search@3x.png 3x"
                     class="magnify-icon"/>
            </div>

            <div className="quick-add-sku-btn">
                <img className="plus-icon"/>
                <span className="quick-add-btn-txt">Add New SKU</span>
            </div>
        </div>


        <p className="toolbar-separator"/>

        <style jsx>{`
        .toolbar {
            margin: auto;
            width: 100%;
        }

        .toolbar-contents {
            display: flex;
            height: 60px;
        }

        .title {
            margin: auto;
            flex-basis: 830px;
            width: 92px;
            height: 31px;
            font-family: 'Source Sans Pro';
            font-size: 24px;
            font-weight: 600;
            text-align: left;
            color: #354052;
        }

        .search-input {
            margin: auto;
            width: 270px;
            height: 36px;
            border-radius: 4px;
            background-color: #ffffff;
            border: solid 1px #dfe3e9;
        }

        .hidden-search {
            width: 225px;
            padding-left: 10px
            padding-right: 10px
            height: 85%;
            opacity: 0.5;
            font-family: 'Source Sans Pro';
            font-size: 14px;
            font-weight: 600;
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
            font-weight: 600;
            line-height: 1.36;
            text-align: center;
            color: #ffffff;
        }

        .toolbar-separator {
            width: 1375px;
            height: 1.5px;
            background-color: #dfe3e9;
            margin: auto;
        }

        `}
        </style>
    </div>


)