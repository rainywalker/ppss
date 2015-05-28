/**
 * Created by jaelomin on 15. 5. 18..
 */

var doc = document;

(function(){
  addEventListener("DOMContentLoaded",function(){
    var styleEle = doc.createElement("style")
    doc.getElementsByTagName("head")[0].appendChild(styleEle);
    var sheet = styleEle.sheet || styleEle.styleSheet;
    var ruleSet = sheet.rules || sheet.cssRules;
    sheet.insertRule("p{color:red}",0);
    console.log(sheet)
    var rule = ruleSet[0];
    rule.style["margin"] = "10px 0";
    rule.style["padding"] = "10px 0"; 

    })
})()
