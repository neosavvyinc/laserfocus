export default () => (
    <span className="bm-icon">
            <div className="bm-burger-bars"></div>
            <div className="bm-burger-bars"></div>
            <div className="bm-burger-bars"></div>

        <style jsx>{`
            bm-icon: {
                width: 18px;
                height: 18px;
            }

            .bm-burger-bars {
                background-color: #000;
                height: 2px;
                margin-top: 3px;
                width: 18px;
            }
            .bm-burger-bars:hover {
                background-color: red;
            }
        `}</style>
    </span>

)