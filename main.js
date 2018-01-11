//popup func
window.onload = function() {
	setTimeout( function fonc( ) 
		{ alert( "Hey le site xxxvidsxxx est trop bien. Viens dessus stp please" ); }
		, 10000) ;};


//section spwn button
var sec = document.getElementById("section");
var butt = document.getElementById("button");
var cont = document.getElementById("container");

butt.onclick = function() 
	{
    var ssrc = sec.getAttribute('style');
    var csrc = container.getAttribute('style');
    if(ssrc === 'display: none;') 
    	{
      	sec.setAttribute ('style','display: all;');
      	cont.setAttribute ('style','display: none;');
		}
	}

	
// search bar attempt
var sbutt = document.getElementById("gauche");
var phrase = "";

	 function getInput(event)
 	{
    	var x = event.which || event.keyCode;
    	//alert(x);
    	 function sort(x)
    	{
    		if (x === 32)
    		{
    			phrase = phrase + '+';
    		}
    		else
    		{
    			phrase = String.fromCharCode(x);
    		}
    	};
   	  
	}

sbutt.onclick = function(){alert(phrase);}

