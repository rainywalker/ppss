
var detect_ie = (function(){
    var agent = navigator.userAgent.toLocaleLowerCase();
    //Not IE!!
    if (agent.indexOf('msie') == -1 && agent.indexOf('trident') == -1) return;

    // IE compatibility
    if(agent.indexOf('msie 7') > -1 && agent.indexOf('trident') > -1) {

        var bStyle = document.body.style;
        var canvas = document.createElement('canvas');

        //version detect
        if(!('getContext' in canvas))  return 8;
        if(!('msTransition' in bStyle) && !('transition' in bStyle)) return 9;
        if(!canvas.getContext('webgl')) return 10;
    }

    // normal IE
    else {
        if(agent.indexOf('msie') == -1) return 11;
        return parseFloat(/msie ([d]+)/.exec(agent)[1])
    }
})()




