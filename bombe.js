var auswahl = Math.floor(Math.random() * (10)+1); 
var Prozess;
var nummer;
var explosion=0;
var count=0;

switch(auswahl) {
	case(1):
	 var farbkombination1 = ['1','2','3','4','5'];
	 Prozess = farbkombination1;
	 nummer = 1;
	 break;
	case(2):
	 var farbkombination2 = ['1','3','4','2','5']
	 Prozess = farbkombination2;
	 nummer = 2;
	 break;
	case(3):
	 var farbkombination3 = ['1','2','4','3','5']
	 Prozess =  farbkombination3;
	 nummer = 3;
	 break;
	case(4):
	 var farbkombination4 = ['1','4','2','3','5'];
     Prozess = farbkombination4;
	 nummer = 4;
     break; 
	case (5):
     var farbkombination5 = ['1','2','3','4','5'];
     Prozess = farbkombination5;
	 nummer = 5;
     break;
    case (6):
     var farbkombination6 = ['4','1','3','2','5'];
     Prozess = farbkombination6;
	 nummer = 6;
     break;
    case (7):
     var farbkombination7 = ['4','1','2','3','5'];
     Prozess = farbkombination7;
	 nummer = 7;
     break;
    case (8):
     var farbkombination8 = ['4','2','1','3','5'];
     Prozess = farbkombination8;
	 nummer = 8;
     break;
    case (9):
     var farbkombination9 = ['4','2','3','1','5'];
     Prozess = farbkombination9;
	 nummer = 9;
     break;
    case (10):
     var farbkombination10 = ['4','3','1','2','5'];
     Prozess = farbkombination10;
	 nummer = 10;
     break;
}



var schwierigkeiten =['01','02','03','04','05'];
var schwierigkeit = schwierigkeiten[Math.floor(Math.random() * schwierigkeiten.length)];


(function () {
	function schwierigkeitsetzen() {
		document.getElementById('Modellnummer')
			.innerHTML = schwierigkeit + 0 + nummer;
	}
	document.addEventListener('DOMContentLoaded', schwierigkeitsetzen);
}());
 



/*var kabelfarben = ["url('Bilder/rot.png')","url('Bilder/gelb.png')","url('Bilder/grün.png')","url('Bilder/blau.png')","url('Bilder/schwarz.png')"];*/



var kabelfarben = [
	["url('Bilder/rot.png')", 1],
	["url('Bilder/gelb.png')", 2],
	["url('Bilder/grün.png')", 3],
	["url('Bilder/blau.png')", 4],
	["url('Bilder/schwarz.png')", 5],
];




if (schwierigkeit == (01) || (02) ||(03)||(04)){
function farbesetzen(kabelfarben) {
    for (var i = kabelfarben.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = kabelfarben[i];
        kabelfarben[i] = kabelfarben[j];
        kabelfarben[j] = temp;
    }

	document.getElementById('kabel1').style.backgroundImage = kabelfarben[0][0];
	document.getElementById('kabel1').setAttribute('onClick', "kabeltrennenrot();berechnen('"+kabelfarben[0][1]+"')");
	document.getElementById('kabel2').style.backgroundImage = kabelfarben[1][0];
	document.getElementById('kabel2').setAttribute('onClick', "kabeltrennengelb();berechnen('"+kabelfarben[1][1]+"')");
	document.getElementById('kabel3').style.backgroundImage = kabelfarben[2][0];
	document.getElementById('kabel3').setAttribute('onClick', "kabeltrennengrün();berechnen('"+kabelfarben[2][1]+"')");
	document.getElementById('kabel4').style.backgroundImage = kabelfarben[3][0];
	document.getElementById('kabel4').setAttribute('onClick', "kabeltrennenblau();berechnen('"+kabelfarben[3][1]+"')");
	document.getElementById('kabel5').style.backgroundImage = kabelfarben[4][0];
	document.getElementById('kabel5').setAttribute('onClick', "kabeltrennenschwarz();berechnen('"+kabelfarben[4][1]+"')");


}

}



if (schwierigkeit==4){
document.addEventListener('DOMContentLoaded', function () {
	var move = [
		{
			transform: 'translate(0, 0)',
		
    },
		{
			transform: 'translate(70px, 170px)',
		
    },
		{
			transform: 'translate(140px, 0px)',
		
    },
	     {
			transform: 'translate(210px, 170px)',
		
    },
	    {
			transform: 'translate(280px, 0px)',
		
    },
	    {
			transform: 'translate(350px, 170px)',
		
    },
		{
			transform: 'translate(420px, 0px)',
			
    },
		{
			transform: 'translate(350px, 170px)',
		
    },
		{
			transform: 'translate(280px, 0px)',
		
    },
		{
			transform: 'translate(210px, 0px)',
		
    },
		{
			transform: 'translate(140px, 0px)',
		
    },
	{
			transform: 'translate(70px, 170px)',
		
    },
	{
			transform: 'translate(0px, 0px)',
		
    }
		
];
	var circle = document.getElementById('Hindernis');

			circle.animate(move, {
				duration: 1000,
				iterations: 200,
				fill: 'forwards'
			});
		
});
}


function schwierigkeit5(){
if (schwierigkeit == 05){
    var schwarz = "url('Bilder/schwarz.png')";
	document.getElementById('kabel1').style.backgroundImage = schwarz;
	document.getElementById('kabel2').style.backgroundImage = schwarz;
	document.getElementById('kabel3').style.backgroundImage = schwarz;
	document.getElementById('kabel4').style.backgroundImage = schwarz;
	document.getElementById('kabel5').style.backgroundImage = schwarz;
} 	
}

/*IF-Schwierigkeitszenario*/
/* Schwierigkeit 1: Ein Leben mehr*/

if (schwierigkeit == (01)){
	explosion=explosion-1;
	window.onload = function() {
	farbesetzen(kabelfarben)
	document.getElementById('Hindernis').style.visibility ="hidden";
	
}
}

/*Schwierigkeit 1-4: Die Farben sind anders*/
if (schwierigkeit == (02) ||(03)){
	window.onload = function() {
	farbesetzen(kabelfarben)
	document.getElementById('Hindernis').style.visibility ="hidden";
}
}

/*Schwierigkeit 2: Nichts */



/*Schwierigkeit 3: Nichts*/


/*Schwierigkeit 4: Ein Trollface stört*/
if (schwierigkeit == (04)){
	window.onload = function() {
	farbesetzen(kabelfarben)
}
}

/*Schwierigkeit 5: Die Farbe und somit die Reihenfolge ist nur durch Modellnummer erratbar*/
if (schwierigkeit == 05){
	window.onload = function() {
	schwierigkeit5();
	document.getElementById('trollface').style.visibility="hidden";
}
}







function berechnen (from, box2){
 let zahl = Prozess[count];
 if (zahl === from ){
	  count=count+1;
 } else{
	  explosion=explosion+1;
	  count=count+1;
 }
 
 if (explosion==1) {
	  alert("Die Bombe ist explodiert");
	  document.getElementById("Übersicht").style.visibility = "hidden";
	  document.getElementById("audio").pause();
 }

 if (count==5) {
	  alert("Die Bombe ist entschärft");
	  document.getElementById("Übersicht").style.visibility = "hidden";
	  document.getElementById("audio").pause();
 }


}

function kabeltrennenrot() {
	document.getElementById("kabel1").style.visibility="hidden";
}



function kabeltrennengelb() {
	document.getElementById("kabel2").style.visibility ="hidden";
}

function kabeltrennengrün() {
	document.getElementById("kabel3").style.visibility ="hidden";
}

function kabeltrennenblau() {
	document.getElementById("kabel4").style.visibility ="hidden";
}

function kabeltrennenschwarz() {
	document.getElementById("kabel5").style.visibility ="hidden";
}




(function () {
	function init() {
		window.addEventListener('load', starteCountdown);
	}

	function starteCountdown() {
		new countdown(90, 'counter');
	}
	Function.prototype.Timer = function (interval, calls, onend) {
		var count = 0;
		var payloadFunction = this;
		var startTime = new Date();
		var callbackFunction = function () {
			return payloadFunction(startTime, count);
		};
		var endFunction = function () {
			if (onend) {
				onend(startTime, count, calls);
			}
		};
		var timerFunction = function () {
			count++;
			if (count < calls && callbackFunction() != false) {
				window.setTimeout(timerFunction, interval);
			} else {
				endFunction();
			}
		};
		timerFunction();
	};

	function leadingzero(number) {
		return (number < 10) ? '0' + number : number;
	}

	function countdown(seconds, target) {
		var element = document.getElementById(target);
		var calculateAndShow = function () {
			if (seconds > 0) {
				var m = Math.floor((seconds % 3600) / 60);
				var s = seconds % 60;
					element.innerHTML=leadingzero(m) + ':' + leadingzero(s);
				seconds--;
			} else {
				return false;
			}
		};
		var completed = function () {
			element.innerHTML = "Gameover";
			alert("Die Bombe ist explodiert");
                        document.getElementById("Übersicht").style.visibility = "hidden";
			document.getElementById("audio").pause();
		};
		calculateAndShow.Timer(1000, Infinity, completed);
	}
	document.addEventListener('DOMContentLoaded', init);
}());





