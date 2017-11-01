import Meta from '../pages/components/meta'
import KCHamburgerMenu from '../pages/components/menu/KCHamburgerMenu';
import KCHeader from '../pages/components/KCHeader';

export default ({ children }) => (
    <div className="mainContainer app">
        <KCHamburgerMenu />
        <KCHeader/>
            <Meta />
            { children }
    </div>

)