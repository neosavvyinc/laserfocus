import Page from '../layouts/main'
import KCHeader from './components/KCHeader';
import KCToolbar from './components/KCToolbar';
import KCGestationBoard from './components/KCGestationBoard';
import HamburgerMenu from './components/HamburgerMenu';

import { stack as Menu } from 'react-burger-menu'

export default () => (
    <Page>
         <main id="outer-container" className="app">
            <HamburgerMenu/>
            <div id="page-wrap">
                <KCHeader/>
                <KCToolbar/>
                <KCGestationBoard/>
            </div>


            <style jsx>{`

               .app {
                   margin: auto;
                   width: 100%;
                   min-width: 1440px;
                   background-color: #eff3f6;
               }
               #page-wrap {
                   height: 100vh;
               }


            `}
            </style>


         </main>
    </Page>
)