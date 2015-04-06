/**
 * Created by jaelomin on 15. 2. 6..
 */

function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            func()
            oldonload();
        }
    }
}

function btn() {
    var editor = document.getElementById("editor")
    var buttons = document.getElementsByTagName("button");
    var btns_length = buttons.length;
    for (var i=0; i<=btns_length; i++) {
        (function () {
            var dd= i;
            buttons[i].onclick = function() {
                btn_Go(dd)
            }
        })()
    }
}


function btn_Go(num) {
    switch (num) {
        case 0 : document.execCommand('bold')
            break;
        case 1 : document.execCommand('italic')
            break;
        case 2 : document.execCommand('underline')
            break;
    }
}

function strSize() {
    var slt = document.getElementById("slt");
    slt.onchange = function() {

    }
}

addLoadEvent(btn)
addLoadEvent(strSize)