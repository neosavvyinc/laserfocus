module.exports = {
    distDir: 'build',
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/gantt': { page: '/gantt' },
            '/detail': { page: '/detail' },
            '/modal': { page: '/modal' }
        }
    }
}