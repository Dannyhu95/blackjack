/* blackjack.js */
function name(){
    if(getCookie("name")==""){
    var person = prompt("Please enter your name:", "");
    createCookie("name",person,69);
    }
    else{
    person = getCookie("name");
    var jack = getCookie("jack");
    if(jack == ""){
        jack = 0;
    }
    alert("Hello " + person + ". Number of blackjacks: " + jack);
    }
}
function rollIt() {
    var d1 = Math.floor(Math.random() * (14-2+1)) + 2; // random num 2-14
	var d2 = Math.floor(Math.random() * (14-2+1)) + 2; // random num 2-14
    if (d1== 12 || d1== 13 || d1==14)
        var d1val=10;
    else if (d1==11)
        var d1val=11;
    else
        var d1val=d1;
    if (d2== 12 || d2== 13 || d2==14)
        var d2val=10;
    else if (d1==11 & d2==11)
        var d2val=1;
    else if (d1!= 11 & d2==11)
        var d2val=11
    else{
        var d2val=d2;
    }
	var tot = d1val + d2val;
	with (document.forms[0]) {
		card1.value = d1val;
		card2.value = d2val;
        hand.value ++;
		total.value= tot+Number(total.value);
        if(total.value == 21){
            setTimeout("window.open('congrats.html')",2000);
            jack = getCookie("jack");
            var numjack = Number(jack)+1;
            createCookie("jack",numjack,69);
        }
    }
	document.images[0].src = "cards/"+d1+ "hearts.gif" ;	
	document.images[1].src = "cards/"+d2+ "hearts.gif" ;
}

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + ";";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
    
} 
