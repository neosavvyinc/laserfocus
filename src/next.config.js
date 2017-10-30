module.exports = {
    distDir: '../target/build',
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/gantt': { page: '/gantt' },
            '/detail': { page: '/detail' },
            '/modal': { page: '/modal' }
        }
    }
}