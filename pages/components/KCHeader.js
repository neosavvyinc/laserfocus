export default () => (
    <div className="top_bar_bg">
        <img src="/static/ic-apps.png"
             srcset="/static/ic-apps@2x.png 2x, /static/ic-apps@3x.png 3x"
             className="ic_apps"/>

        <p className="first-divider"/>

        <img src="/static/logo.jpg"
             srcset="/static/logo@2x.jpg 2x, /static/logo@3x.jpg 3x"
             className="logo"/>

        <img src="/static/ic-noti.png"
             srcset="/static/ic-noti@2x.png 2x, /static/ic-noti@3x.png 3x"
             className="ic_noti"/>

        <p className="second-divider"/>

        <div className="profile-container">
            <p className="profile-picture"/>
            <div className="user-role-container">
                <span className="text-style-emphasis username">Adam Parrish</span>
                <p className="role text-style-light">Admin</p>
            </div>
            <img src="/static/ic-dropdown.png"
                 srcset="/static/ic-dropdown@2x.png 2x, /static/ic-dropdown@3x.png 3x"
                 className="ic_dropdown"/>
        </div>
        <style jsx>{`

            .ic_apps {
                width: 32px;
                height: 32px;
                object-fit: contain;
                padding: 20px;
            }

            .logo {
                width: 211px;
                height: 40px;
                object-fit: contain;
                padding: 20px;
            }

            .top_bar_bg {
              width: 1439px;
              height: 69px;
              background-color: #ffffff;
              box-shadow: 0 4px 10px 0 rgba(48, 58, 113, 0.05);
              border: solid 1px #eff3f6;
              display: flex;
              flex-direction: row;
              align-items: center;
            }

            .first-divider {
              width: 1px;
              height: 69px;
              background-color: #dfe3e9;
            }

            .second-divider {
              width: 1px;
              height: 69px;
              background-color: #dfe3e9;
            }

            .ic_noti {
              width: 42px;
              height: 26px;
              object-fit: contain;
              margin-left: auto;
              padding: 20px;
            }

            .profile-container {
                width: 250px;
                display: flex;
                flex-direction: row;
                align-items: center;
            }

            .user-role-container {
                flex-direction: column;
                align-items: flex-end;
            }

            .profile-picture {
                margin: 20px
                width: 44px;
                height: 44px;
                background-color: #7f8fa4;
            }

            .username {
              width: 95px;
              font-family: 'Source Sans Pro';
              font-size: 16px;
              font-weight: 600;
              text-align: left;
              color: #303a71;
            }

            .role {
              width: 81px;
              font-family: 'Source Sans Pro';
              font-size: 14px;
              text-align: left;
              color: #9b9b9b;
            }

            .ic_dropdown {
              width: 8px;
              height: 8px;
              object-fit: contain;
              margin-right: 20px;
              margin-left: auto;
            }
            `}</style>
    </div>
)