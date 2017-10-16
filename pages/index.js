import Page from '../layouts/main'
import KCHeader from './components/KCHeader';

export default () => (
    <Page>
         <div className="app">

            <KCHeader/>

             <style jsx>{`

                .app {
                    margin: auto;
                    width: 1440px;
                    height: 824px;
                    background-color: #eff3f6;
                }

                `}</style>


         </div>
    </Page>
)