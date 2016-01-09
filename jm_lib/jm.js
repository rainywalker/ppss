/**
 * Created by jaelomin on 2015. 12. 23..
 */
var doc = document,

getId = function(id){
    return doc.getElementById(id)
},
nextEle = function(elem){
    var nextDOM = elem.nextSibling;
    if (nextDOM.nodeType !== 1) {
        return nextDOM.nextSibling;
    }
    else {
        return nextDOM;
    }
},
prevEle = function(elem) {
    var prevDOM = elem.previousSibling;
    if (prevDOM.nodeType !== 1) {
        return prevDOM.previousSibling;
    }
    else {
        return prevDOM;
    }
},
getClass = function(cn) {
    var allEle = doc.getElementsByTagName("*"),
        i=0, len=allEle.length,
        classBox = [];
    for (; i<len; i++) {
        if (allEle[i].getAttribute('class') === cn) {
            classBox.push(allEle[i])
        }
    }
    return classBox;
},
loop = function(cn) {
    var i=0, len = cn.length;
    for (; i<len; i++) {

    }
}