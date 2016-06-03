
var LedControl = require("rpi-led-control"); 

var lc = new LedControl(11,10,9); // data pin, clock pin, cs pin
lc.setBrightness(0,15);

var d1 = {x : 0, y:0, vx:1, vx :1}; 
var d2 = {x : 0, y:0, vx:1, vy :1}; 

var  startTime = Date.now();
setInterval(loop, 1000);
function clearCanvas() {
	for(var i = 0; i < 9; i++) {
	  lc.setLed(0,i,i,0);
	  console.log('clearing canvas');
	}
}
function loop() { 
	// console.log('initial d1: ==> ' + d1.x);
	// clearCanvas();

	with(d1) {
		lc.setLed(0,x,y,0);
		lc.setLed(0,7-x,7-y,0);

		if (x === 8) {
			x = 0;

		}

		lc.setLed(0,x,y,1); 
		lc.setLed(0,7-x,7-y,1);
		x++;
		// y++;
	}
	
	//++d1.x;
	// with(d1) { 
	// 	lc.setLed(0,x,y,0); 
	// 	lc.setLed(0,7-x,7-y,0); 
	
	// 	x+=xvel;
	
	// 	if((x==8)||(x==-1)) {
	// 		x-=xvel;
	// 		xvel*=-1;
	// 		y+=yvel; 
	// 		if((y==7)||(y==0)) yvel*=-1; 
	// 	}
	 
	// 	lc.setLed(0,x,y,1); 
	// 	lc.setLed(0,7-x,7-y,1); 
	// }
}



