var doc = document,
    Rolling = function() {
        this.init();
    };

Rolling.prototype = {
    init : function() {

        this.cacheElem();
        this.behavior();


    },
    cacheElem : function() {
        this.view = doc.getElementById('view');
        this.box = doc.getElementById('box');
        this.links = box.getElementsByTagName("a");
    },
    behavior : function() {
        this.box.style['-webkit-transform'] = "translate(0,0)";

        var matrix = this.box.style['-webkit-transform'].replace(/[^0-9\-.,]/g,'').split(','),
            current_x = parseInt(matrix[0]),
            final_x = parseInt(this.links[0].offsetWidth,10) + 10,
            dist, movement;

        movement = setInterval(function(){
            if (current_x == -final_x) {
                return true;
            }
            current_x -= Math.ceil(22);
            this.box.style['-webkit-transform'] = 'translate('+ current_x +'px,0)';
        },20);
    },
    cloneEle : function() {
            
    }
};


var rolling = new Rolling();
