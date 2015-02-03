/**
 * Created by jaelomin on 14. 11. 20..
 */



function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}


function execute(param1, param2) {
    var a = 1, b = 2;
    function func() {
        return a + b;
    }
    return param1 + param2 + func();
}

execute(3,4)
console.log(execute(3,4))

function ssd(title) {
    return {
        get_prt : function() {
            return title;
        },
        set_prt : function(_title) {
            title = _title;
        }
    }
}



k1 = ssd("ppss");
k2 = ssd("ppss 22h 2");

function outerFunc(arg1, arg2) {
    var local = 8;
    function innerFunc(innerArg) {
        console.log(arg1,arg2,innerArg)
    }
    return innerFunc
}
var exam1 = outerFunc(2,4)
exam1(2)

function HelloFunc(func) {
    this.greeting = "hello";
    
}


HelloFunc.prototype.call = function(func) {
    func ? func(this.greeting) : this.func(this.greeting)
}


var userFunc = function (greeting) {
    console.log(greeting)
}

var objHello = new HelloFunc();
objHello.func = userFunc;

objHello.call()



