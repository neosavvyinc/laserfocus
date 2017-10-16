import Meta from '../pages/components/meta'

export default ({ children }) => (
    <div className="mainContainer">
        <Meta />
        { children }

        <style jsx>{`

                .mainContainer {
                    display: flex;
                }

                `}</style>

    </div>


)