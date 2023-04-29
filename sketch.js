var ball;
var vx = 2;

function setup() {
  createCanvas(400,400);

  ball = createSprite(100,100,100,100);
}

function count () {
  var numbers = [1,2,3,4,5,6,7,8,9]
  var len = numbers.length

  for (var i = 0; i < len; i++) {
  console.log(numbers[i])
  }


}

 count ()

function draw() 
{
  background(51);
  if(ball.position.x<=50 || ball.position.x>=width-50)
  {
    vx= -vx;
  }
  ball.velocity.x = vx;



  drawSprites();

}

