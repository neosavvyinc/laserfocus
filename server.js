const { createServer } = require('http');
const { createProxyServer } = require('http-proxy');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const apiProxy = createProxyServer({
    target: {
        host: 'localhost',
        port: 8080
    }
});

app.prepare().then(() => {
    createServer((req, res) => {
        const parsedUrl = parse(req.url, true);
        if(
            parsedUrl.path.indexOf("api") >= 0 ||
            parsedUrl.path.indexOf("graphql") >= 0 ||
            parsedUrl.path.indexOf("graphiql") >= 0
        ) {
            apiProxy.web(req, res);
        }
        else {
            handle(req, res, parsedUrl)
        }

    }).listen(3005, err => {
        if (err) throw err;
        console.log('> Ready on http://localhost:3005')
    })
})