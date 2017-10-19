import { slide as Menu } from 'react-burger-menu'


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenu: {
        background: '#f7f9fb',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
};

export default () => (
    <Menu customBurgerIcon={
        <img  src="/static/1pixel.png"/>
    } styles={styles}>
        <div className="navigation-menu">
            <p><a className="unselected-nav-item">SKUS</a></p>
            <p><a className="unselected-nav-item">Brands</a></p>
            <p><a className="unselected-nav-item">Users</a></p>
            <p><a className="unselected-nav-item">Royalty Codes</a></p>
            <p><a className="unselected-nav-item">Facilitators</a></p>


            <p className="end"><a className="unselected-nav-item">Settings</a></p>
            <p className="end"><a className="unselected-nav-item">Help & Support</a></p>
        </div>
        <style jsx>{`
            .navigation-menu {
                display: flex !important;
                flex-direction: column;
                height: 100%;

            }
            .unselected-nav-item {
                width: 220px;
                height: 20px;
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: #7f8fa4;
            }
            .selected-nav-item {
                width: 220px;
                height: 20px;
                font-family: 'Source Sans Pro';
                font-size: 16px;
                font-weight: 600;
                text-align: left;
                color: #354052;
            }
            .end {
                align-self: flex-end;
                text-align: left;
            }
        `}</style>
    </Menu>
)