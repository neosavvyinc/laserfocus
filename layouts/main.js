import Meta from '../pages/components/meta'

export default ({ children }) => (
    <div className="mainContainer">
        <Meta />
        { children }

        <style jsx>{`

                .mainContainer {
                    max-width: 1440px;
                    font-family: 'Source Sans Pro';
                }

                `}</style>

    </div>


)