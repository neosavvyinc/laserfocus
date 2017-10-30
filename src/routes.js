const routes = module.exports = require('next-routes')();

routes
    .add('index', '/')
    .add('detail', '/detail/:id', 'detail')
    .add('gantt', '/gantt')
    .add('modal', '/modal');
