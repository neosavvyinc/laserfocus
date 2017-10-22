import Meta from '../pages/components/meta'

export default ({ children }) => (
    <div className="mainContainer">
        <Meta />
        { children }

        <style jsx>{`

                .mainContainer {
                    //margin: 0 auto;
                    max-width: 1440px;
                }

                `}</style>

    </div>


)