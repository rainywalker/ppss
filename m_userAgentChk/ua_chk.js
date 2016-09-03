/**
 * Created by jaelomin on 2016. 1. 13..
 */


var deviceAgent = navigator.userAgent;

var agentIndex = deviceAgent.indexOf('Android');

if (agentIndex != -1) {
    var androidversion = parseFloat(deviceAgent.match(/Android\s+([\d\.]+)/)[1]);

    if (androidversion < 4.1) {
        //4.1미만
        alert('4.1미만')

    } else {
        //4.1 이상상
        alert('4.1초과')
   }
 else {
    // Not android!!
        alert('안드로이드가 아님!')
}

