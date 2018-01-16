let bubbles= [];

function setup() {
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i < 50; i++){
		bubbles[i] = new Bubble(random(windowWidth), random(windowHeight));
	}

}

function draw() {

	background(255);

	for(let b of bubbles){
		b.show();
		b.move();

		let overlapping = false;

		for(let other of bubbles)
			if(b!=other && b.intersect(other))
				overlapping = true;


			if(overlapping)
				b.changeColor(255);
			else
				b.changeColor(0);
		
	}
	
}

class Bubble{
	constructor(tempX, tempY){
		this.x = tempX;
		this.y = tempY;
		this.speedX = 4;
		this.speedY = 4;
		this.width = 50;
		this.height = 50;
		this.bubbleRed = 0;
		this.brightness = 0;
	}

	show(){
		fill(this.brightness, 0, 0);
		noStroke();
		ellipse(this.x, this.y, this.width, this.height);

	}

	move(){
		this.x += random(-this.speedX, this.speedX);
		this.y += random(-this.speedY, this.speedY);
	}
	
	changeColor(brightness){
		this.brightness = brightness;
	}

	bounce(){
		if(this.x > windowWidth || this.x < 0)
			this.speedX *= -1;

		if(this.y > windowHeight || this.y < 0)
			this.speedY *= -1;
	}

	intersect(secondObj){
		let d = dist(this.x, this.y, secondObj.x, secondObj.y );

		return(d < this.width/2 + secondObj.width/2);
	}

	
}
