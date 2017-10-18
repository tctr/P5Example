
function setup() {
    createCanvas(window.innerWidth,window.innerHeight);
    size = 50;
    shape1 = new shape();
    //console.log(size);
    //blendMode(DODGE);
}

function shape() {
  this.x = random(window.innerWidth);
  this.y = random(window.innerHeight);
  this.diameter = random(50, 100);
  this.speed = 10;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}


function draw() {

size  += 10;
    if (mouseIsPressed) {
        fill(100,0,255,1);
        //nostroke();
    }
    else {
        fill(255,0,200,0.5);
        //nostroke();
    }

    //if size==80 {size=50;}else{size +=1}
    noStroke();
    ellipse(mouseX+random(-20,20),mouseY+random(-20,20),random(50,150),random(50,150));

    shape1.move();
    shape1.display();

//    noFill();
//stroke(0, 200, 0);
//bezier(85, 20, 10, 10, 90, 90, 15, 80);
}
