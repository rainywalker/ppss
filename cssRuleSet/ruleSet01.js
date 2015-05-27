/**
 * Created by jaelomin on 15. 5. 18..
 */


var CssStyle = (function(doc){

    var styleEle = document.createElement("style")
    doc.getElementsByTagName("head")[0].appendChild(styleEle);
    var sheet = styleEle.sheet || styleEle.styleSheet;
    var ruleSet = sheet.rules || sheet.cssRules;

  
})(document)
