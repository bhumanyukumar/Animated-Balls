var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

function Circle(x,y,dx,dy,radius,color,stroke){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = color;
  this.stroke = stroke;
  this.draw = function(){
    c.beginPath();
    c.arc(this.x,this.y,this.radius,0,Math.PI*2);
    c.fillStyle = this.color;
    c.fill();
    c.strokeStyle = this.stroke;
    c.stroke();
  }
  this.update = function(){
    if(this.x+this.radius >= innerWidth || this.x-this.radius <= 0)
      this.dx = -this.dx;
    if(this.y+this.radius >= innerHeight || this.y-this.radius <= 0)
      this.dy = -this.dy;
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}
function getRandomColor(){
  let r = Math.floor(Math.random()*256);
  let g = Math.floor(Math.random()*256);
  let b = Math.floor(Math.random()*256)
  return "rgb("+r+","+g+","+b+")";
}
var circles = [],x,y,dx,dy,radius=20,color,stroke;
for(let i=0;i<200;i++){
  x = Math.floor((Math.random()*(innerWidth-radius*2))+radius);
  y = Math.floor((Math.random()*(innerHeight-radius*2))+radius);
  dx = (Math.random()-0.5)*8;
  dy = (Math.random()-0.5)*8;
  color = stroke = getRandomColor();
  circles.push(new Circle(x,y,dx,dy,radius,color,stroke));
}
function animate(){
  requestAnimationFrame(animate);
  c.clearRect(0,0,innerWidth,innerHeight);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for(let i=0;i<200;i++)
    circles[i].update();
}
animate();