import Head from 'next/head'
export default () => (

        <Head>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <style jsx global>{`

                body {
                    margin: 0;
                }

                .text-style-emphasis {
                    font-family: 'Source Sans Pro';
                    font-size: 16px;
                    font-weight: 600;
                    text-align: left;
                    color: #303a71;
                }

                .linkText {
                    font-family: 'Source Sans Pro';
                    font-size: 15px;
                    font-weight: 600;
                    text-align: left;
                    color: #00aaff;
                }

                .standardText {
                    font-family: 'Source Sans Pro';
                    font-size: 15px;
                    text-align: left;
                    color: #354052;
                }

                .text-style-light {
                    font-family: 'Source Sans Pro';
                    font-size: 14px;
                    text-align: left;
                    color: #9b9b9b;
                }
            `}</style>
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        </Head>
)