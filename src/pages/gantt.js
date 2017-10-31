import Page from '../layouts/main'
import KCGantt from './components/KCGantt';
import KCToolbar from './components/KCToolbar';

export default () => (
    <Page>
        <KCToolbar
            hideAdd={true}
        />
        <KCGantt/>

    </Page>
)