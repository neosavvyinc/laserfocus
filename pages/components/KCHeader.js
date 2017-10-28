export default () => (
    <div className="application-header">
        <span className="menu"></span>

        <p className="first-divider"/>

        <div className="logo-title">
            <img src="/static/images/logo.jpg"
                 srcSet="/static/images/logo@2x.jpg 2x, /static/images/logo@3x.jpg 3x"
                 className="logo"/>
            <span className="title text-emphasis">IMF Lite Tool 2.0</span>
        </div>


        <div className="search-input">
            <input className="hidden-search" placeholder="Search"/>
            <img src="/static/svg/ic-search.svg"
                 srcSet="/static/images/ic-search@2x.png 2x,/static/images/ic-search@3x.png 3x"
                 className="magnify-icon"/>
        </div>

        <div className="btn-notification"></div>

        <p className="second-divider"/>

        <div className="profile-container">
            <p className="profile-picture"/>
            <div className="user-role-container">
                <span className="text-emphasis username">Adam Parrish</span>
                <p className="role text-light">Admin</p>
            </div>
            <img src="/static/ic-dropdown.png"
                 srcSet="/static/ic-dropdown@2x.png 2x, /static/ic-dropdown@3x.png 3x"
                 className="dropdown-icon"/>
        </div>
        <style jsx>{`



            .application-header {
                height: 70px;
                width: 100%;
                background-color: #ffffff;
                box-shadow: 0 4px 10px 0 rgba(48, 58, 113, 0.05);
                border: solid 1px #eff3f6;
                display: flex;
                flex-direction: row;
                align-items: center;
                box-sizing: border-box;
            }

            .menu {
                width: 95px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .bm-burger-button:hover {
                background-color: #1e9fcf;
            }
            .bm-burger-bars:hover {
                background-color: #fff;
            }

            .logo-title {
                display: flex;
                flex-direction: row;
                align-items: center;
                flex-grow: 1;
            }
                .logo {
                    width: 211px;
                    height: 40px;
                    object-fit: contain;
                    padding: 0 20px;
                }
                .title {
                    border-left: 1px solid black;
                    padding-left: 14px;
                }

            .first-divider,
            .second-divider {
                width: 1px;
                height: 100%;
                background-color: #dfe3e9;
                margin: 0;
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

            .btn-notification {
                height: 26px;
                width: 42px;
                background: url(static/svg/ic-noti.svg) no-repeat 0 0;
                margin: 0 20px 0 0;
            }
            .profile-container {
                width: 250px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .profile-picture {
                margin: 0 0 0 20px
                width: 44px;
                height: 44px;
                background-color: #7f8fa4;

                display: none;
            }

            .user-role-container {
                margin: 0 0 0 0
                flex-direction: column;
                align-items: flex-end;
                margin: 0 0 0 20px;
            }
                .username {
                    width: 95px;
                    font-size: 16px;
                    font-weight: 600;
                    text-align: left;
                    color: #303a71;
                }

                .role {
                    margin: 0 0 0 0
                    width: 81px;
                    font-family: 'Source Sans Pro';
                    font-size: 14px;
                    text-align: left;
                    color: #9b9b9b;
                }

            .dropdown-icon {
                width: 8px;
                height: 8px;
                object-fit: contain;
                margin-right: 20px;
                margin-left: auto;
            }
            `}</style>
    </div>
)