var sec = document.getElementById("section")
var butt = document.getElementById("button");

butt.onclick = function() 
	{
    var ssrc = sec.getAttribute('style');
    var bsrc = butt.getAttribute('style');
    if(ssrc === 'display: none;') {
      sec.setAttribute ('style','display: all;');
      butt.setAttribute ('style','display: none;');
	}
}