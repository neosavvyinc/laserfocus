import Meta from '../pages/components/meta'
import HamburgerMenu from '../pages/components/HamburgerMenu';
import KCHeader from '../pages/components/KCHeader';
import KCToolbar from '../pages/components/KCToolbar';

export default ({ children }) => (
    <div className="mainContainer">
        <main id="outer-container" className="app">
            <HamburgerMenu/>
            <div id="page-wrap">
                <KCHeader/>
                <KCToolbar/>

                <Meta />
                { children }
            </div>
        </main>
    </div>

)