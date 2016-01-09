/**
 * Created by jaelomin on 2015. 12. 31..
 */


requirejs.config({
    baseUrl : './',
    paths : {
        'jquery' : 'jquery.min',
        'underscore' : 'underscore',
        'backbone' : 'backbone'
    },
    shim : {
        "backbone" : {
            deps: ["underscore",'jquery'],
            exports: 'backbone'
        }
    }
});

