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
                   width: 1440px;
                   height: 824px;
                   background-color: #eff3f6;
               }


            `}
            </style>


         </div>
    </Page>
)