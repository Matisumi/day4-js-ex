//popup func
window.onload = function() {          //when page is loaded
	setTimeout( function fonc( )      //when timer is over spwn alert
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
    if(ssrc === 'display: none;') //switch
    	{
      	sec.setAttribute ('style','display: all;');
      	cont.setAttribute ('style','display: none;');
		}
	}

	
// search bar attempt
//var sbutt = document.getElementById("gauche");
//var phrase = "";
//var x = "";

let boutonRecherche = document.getElementById("gauche");

boutonRecherche.onclick = function () {

let adresseInput = document.getElementById("sbar").value;
document.location.href="https://www.google.fr/#q=" + adresseInput;

}
	/* function getInput(event)
 	{
    	x = event.which || event.keyCode;
    	//alert(x); //see if it get the ascii of input
    		if (x === 32)
    		{
    			phrase = phrase + '+';
    		}
    		else
    		{
    			phrase = String.fromCharCode(x);
    		}
    	};
   	  
	

sbutt.onclick = function(){alert(phrase);}*/

/*function recherche(){
    var val_input=document.getElementById("sbar").value;
    val_input.replace(/ /g, "+");
    sbutt.setAttribute('href',"https://www.google.fr/"+"#q=" + val_input);
}

sbutt.onclick = function() {
    recherche()
}

sbutt.onkeypress= function(){
    if (event.keyCode == '13'){
        recherche()
    }
}*/

