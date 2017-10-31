import Page from '../layouts/main'
import KCToolbar from './components/KCToolbar';
import KCDetail from './components/KCDetail';

export default () => (
    <Page>
        <KCToolbar
            hideAdd={true}
        />
        <KCDetail/>

    </Page>
)