import Page from '../layouts/main'
import KCHeader from './components/KCHeader';
import KCToolbar from './components/KCToolbar';
import KCGestationBoard from './components/KCGestationBoard';

export default () => (
    <Page>
         <div className="app">

            <KCHeader/>
            <KCToolbar/>
            <KCGestationBoard/>


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


         </div>
    </Page>
)