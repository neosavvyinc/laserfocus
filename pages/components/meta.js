import Head from 'next/head'
export default () => (

        <Head>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <style jsx global>{`

                body {
                    margin: 0;
                    font-family: 'Source Sans Pro';
                    font-size: 16px;
                    color: #354052;
                }

                /*
                    1.5em = 24px
                    1.25em = 20px
                    .95em = 15px
                    .81em = 13px
                */

                h1, h2, h3, h4, h5, p {
                    margin: 0;
                    padding: 0;
                }

                h1 {
                    font-size: 1.5em;
                    font-weight: 600;
                }

                h2 {
                    font-size: 1.25em;
                    font-weight: 600;
                    text-align: left;
                    display: inline-block;
                }

                h3 {
                    font-size: .95em;
                    font-weight: 600;
                    text-align: left;
                }

                h4 {
                    font-size: .84em;
                    text-align: left;
                }

                .text-emphasis {
                    font-weight: 600;
                    text-align: left;
                }

                .linkText {
                    font-size: 15px;
                    font-weight: 600;
                    text-align: left;
                    color: #00aaff;
                }

                .text-med {
                    font-size: 13px;
                    text-align: left;
                    color: #354052;
                }

                .text-light {
                    font-size: .88em;
                    text-align: left;
                    color: #9b9b9b;
                }


                .btn.icon {
                    background: url(/static/edit.svg) no-repeat 0 0;
                    height: 24px;
                    width: 24px;
                    border: none;
                    background-color: transparent;
                }
                .btn.icon:hover {
                    cursor: pointer;
                }
                .btn.icon.edit {
                    background: url(/static/edit.svg) no-repeat 0 0;
                }


                .panel {
                    height: 100%;
                    min-height: 500px;
                    border-radius: 4px;
                    background-color: #ffffff;
                    border: solid 1px #e6eaee;
                }


            `}</style>
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        </Head>
)