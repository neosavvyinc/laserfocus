import Page from '../layouts/main'
import KCHeader from './components/KCHeader';
import KCToolbar from './components/KCToolbar';
import HamburgerMenu from './components/HamburgerMenu';

import KCDetail from './components/KCDetail';

import { stack as Menu } from 'react-burger-menu'

export default () => (
    <Page>
        <main className="app">
            <HamburgerMenu/>
            <KCHeader/>
            <KCToolbar/>
            <KCDetail/>
            <style jsx>{`

               .app {
                   margin: auto;
                   height: 100%;
                   width: 100%;
                   min-width: 1440px;
                   min-height: 824px;
                   background-color: #eff3f6;
               }


            `}
            </style>


        </main>
    </Page>
)