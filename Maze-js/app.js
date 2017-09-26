
let x = 0;
let y = 0;
const spacing=10;

function setup()
{
	createCanvas(500,500);
	background(0);
}

function draw(){
	stroke(255);
	if (random(10)< 5) {
		line(x, y, x+spacing, y+spacing);
	}
	else{
		line(x,y+spacing,x+spacing,y);
	}
	x=x + 10;
}