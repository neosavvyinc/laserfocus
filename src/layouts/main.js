import Meta from '../pages/components/meta'
import HamburgerMenu from '../pages/components/HamburgerMenu';
import KCHeader from '../pages/components/KCHeader';

export default ({ children }) => (
    <div className="mainContainer">
        <main id="outer-container" className="app">
            <HamburgerMenu/>
            <div id="page-wrap">
                <KCHeader/>

                <Meta />
                { children }
            </div>
        </main>
    </div>

)