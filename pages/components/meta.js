import Head from 'next/head'
export default () => (
    <div>
        <Head>
            <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta charSet="utf-8" />
            <link rel="icon" type="image/ico" href="/static/favicon.ico" />
        </Head>
        <style jsx global>{`

            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed,
            figure, figcaption, footer, header, hgroup,
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
            }
            /* HTML5 display-role reset for older browsers */
            article, aside, details, figcaption, figure,
            footer, header, hgroup, menu, nav, section {
                display: block;
            }
            html {
              box-sizing: border-box;
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
            body {
                line-height: 1;
            }
            ol, ul {
                list-style: none;
            }
            blockquote, q {
                quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
                content: '';
                content: none;
            }

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

                p {
                    line-height: 1.3em;
                }

                .text-emphasis {
                    font-weight: 600;
                    text-align: left;
                }

                .linkText {
                    font-size: .95em;
                    font-weight: 600;
                    text-align: left;
                    color: #00aaff;
                }

                .text-24 {
                    font-size: 1.5em;
                }

                .text-15 {
                    font-size: .95em;
                    text-align: left;
                    color: #354052;
                }

                .text-14 {
                    font-size: 14px;
                    text-align: left;
                    color: #354052;
                }

                .text-med {
                    font-size: .81em;
                    text-align: left;
                    color: #354052;
                }

                .text-light {
                    font-size: .88em;
                    text-align: left;
                    color: #9b9b9b;
                }


                .btn.icon {
                    background: url(/static/svg/edit.svg) no-repeat 0 0;
                    height: 24px;
                    width: 24px;
                    border: none;
                    background-color: transparent;
                }
                .btn.icon:hover {
                    cursor: pointer;
                }
                .btn.icon.edit {
                    background: url(/static/svg/edit.svg) no-repeat 0 0;
                }


                .panel {
                    height: 100%;
                    min-height: 500px;
                    border-radius: 4px;
                    background-color: #ffffff;
                    border: solid 1px #e6eaee;
                }

                .status-icon {
                    background: url(/static/svg/ic-progress-point-active.svg) 0 0 no-repeat;
                    display: inline-block;
                    height: 10px;
                    width: 10px;
                    background-size: contain;
                }

                /* colors */

                .sales,
                 .yellow {
                    background-color: #feca34;
                }
                .dist,
                .blue {
                    background-color: #00aaff;
                }
                .fin,
                 .green {
                    background-color: #1bb934;
                }
                .approval,
                .black {
                    background-color: #303a71;
                }


            /* LAYOUT*/
                .app {
                   margin: auto;
                   height: 100%;
                   width: 100%;
                   min-width: 1440px;
                   min-height: 824px;
                   background-color: #eff3f6;
               }

                #outer-container {
                    min-height: 100vh;
                }

                .mainContainer {
                    max-width: 1440px;
                }



         `}</style>
    </div>
)