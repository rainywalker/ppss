window.onload = function() {
    var aas = document.getElementById('ap');
    var s = {
        title : 'asdfsd',
        value : '324234'
    };
var ppp = s;
    var a = {
        p : function() {
            aas.onclick = function() {
                ppp.value='00000'
                console.log(ppp);
            };
        }
    }
    a.p()

};
