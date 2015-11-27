

function showPic(pic) {

	var source = pic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var txt = pic.getAttribute("title");
	var desc = document.getElementById("desc");
	desc.firstChild.nodeValue = txt;

}


function prepare() {
	var gallery = document.getElementById("imgGall");
	var linkss = gallery.getElementsByTagName("a");
	for (var i=0; i<linkss.length; i++) {
		// linkss[i].onclick = function(e) {

		// 	showPic(this);
		// 	return false;

		// }
		gallery.addEventListener("click",function(e){
        e.preventDefault();
        var target = e.target || e.srcElement;
        showPic(target);
    });
	}
}
