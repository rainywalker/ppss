/**
 * Created by jaelomin on 15. 10. 21..
 */

requirejs.config({
    baseUrl: 'js',
    paths : {
        'detect' : 'detect_ie'
    }
})

requirejs([
    'detect'
])