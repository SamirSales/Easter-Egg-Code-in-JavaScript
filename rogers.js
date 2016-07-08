// Monsieur Roger
var _q_bubbles = 5;
var vel_min = 5000;
var vel_max = 5500;
var time = 30;
var timer;
var bubble = new Image();
var bubbles = new Array();
var _code = "38384040373937396665";
var buffer_of_code = "";

var monsieur_roger = function () {
    var random_number = function (min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
    bubble.src = 'bubble.png';
    var _pos_x_inicial = -bubble.width+10,
        _pos_x_final = window.innerWidth + 50,
        _pos_y_inicial = $(window).height() + 500,
        _pos_y_final = -bubble.height - 500;
    for (var i = 0; i < _q_bubbles; i++) {
		    bubbles[i] = new Image();
		    bubbles[i].src = bubble.src;
        $(bubbles[i]).css({
            display: 'block',
            position: 'fixed',
            top: random_number(_pos_y_inicial, _pos_y_inicial + 50),
            left: _pos_x_inicial
        }).appendTo('body').animate(
  		    {left: _pos_x_final, top: random_number(_pos_y_inicial, _pos_y_final)},
  		    random_number(vel_min, vel_max),
  		    function () { $(this).remove(); }
	      );
    }
}

$(document).keyup(function (e) {
    buffer_of_code += e.keyCode;
    console.log("press: "+e.keyCode+" current: "+buffer_of_code+"\n");
    if (_code.substring(0,buffer_of_code.length) == buffer_of_code) {
	     if(_code == buffer_of_code){
			     monsieur_roger();
			     buffer_of_code = _code.substring(0,_code.length-2);
			     if (timer) clearTimeout(timer);
			     timer = setTimeout(function(){ buffer_of_code = ""; }, time * 1000);
		   }
    } else {
        buffer_of_code = "";
    }
});
