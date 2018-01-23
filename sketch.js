let snake;
let snakes = [];
function setup() {
	createCanvas(windowWidth, windowHeight);

	for(let i=0; i<10; i++){
	 snakes[i] = new Snake();
	}
}

function draw() {
	background(255);


	for(let i=0; i<snakes.length; i++){
		snakes[i].display();
		snakes[i].move();
		snakes[i].bounce();
	}
	

}

class Snake{
	constructor(){
		let tempSize = random(5, 50);

		this.x = random(windowWidth);
		this.y = random(windowHeight);
		this.width = tempSize;
		this.height = tempSize;
		this.speedX = 5;
		this.speedY = 5;
		this.color = random(5, 200);

		this.history = [];
	}	

	display(){
		fill(255);
		ellipse(this.x, this.y,	this.width, this.height);


		/*/////////////////////////////////*/

		let v = createVector(this.x, this.y);
		this.history.push(v);

		/*/////////////////////////////////*/

		if(this.history.length>20){
			this.history.splice(0, 1);
		}


		for(let i=0; i<this.history.length; i++){
			var position = this.history[i];
			fill(0, this.color, 0);
			noStroke();
			ellipse(position.x + random(-5, 5), position.y + random(-5, 5), (this.width/2)+i, (this.height/2)+i);
		}



	}

	move(){
		this.x += this.speedX;
		this.y += this.speedY;
	}

	bounce(){
		if(this.x>windowWidth || this.x<0){
			this.speedX *= -1;
		}

		if(this.y>windowHeight || this.y<0){
			this.speedY *= -1;
		}
	}
}
