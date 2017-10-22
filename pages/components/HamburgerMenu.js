import { slide as Menu } from 'react-burger-menu'


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '30px',
        top: '20px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        display: 'none'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        height: 'calc(100vh - 70px)',
        top: '70px',
        width: '270px'
    },
    bmMenu: {
        background: '#fff',
        boxShadow: '0 5px 14px 0 rgba(48, 58, 113, 0.2)'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad'
    },
    bmOverlay: {
        display: 'none'
    }
};

export default () => (
    <Menu customBurgerIcon={
        <img  src="/static/1pixel.png"/>
    } styles={styles}>
        <div className="navigation-menu">
            <ul className="align-top">
                <li className="nav-item">SKUS</li>
                <li className="nav-item">Brands</li>
                <li className="nav-item">Users</li>
                <li className="nav-item">Royalty Codes</li>
                <li className="nav-item">Facilitators</li>
            </ul>

            <ul className="align-bottom">
                <li className="nav-item">Settings</li>
                <li className="nav-item">Help & Support</li>
            </ul>
        </div>
        <style jsx>{`
            .bm-item-list {
                padding: 0 !important;
            }
            .navigation-menu {
                height: calc(100vh - 70px);
                display: flex !important;
                flex-direction: column;
                padding: 26px 0;
                box-sizing: border-box;
            }
            .navigation-menu ul {
                margin: 0;
                padding: 0;
            }
            .nav-item {
                list-style: none;
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                color: #354052;
                line-height: 1.6em;
                padding: 6px 6px 6px 30px;
                margin: 0;
            }
            .nav-item:hover {
                background-color: #f7f9fb;
            }
            .nav-item.selected {
                background-color: #f7f9fb;
            }
            .align-top {
                flex-grow: 1;
            }

        `}</style>
    </Menu>
)