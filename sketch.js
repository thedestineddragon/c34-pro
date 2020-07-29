//Create variables here
var  dog,Dog1,Dog2,database,foodS=0,foodStock
function preload()
{
  //load images here
  Dog1 = loadImage("images/dogImg.png")
  Dog2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,10,10);
  dog.addImage(Dog1);
  Dog1.resize(150,150);
  Dog2.resize(150,150);
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(Dog2)
}
  drawSprites();
fill("red")
textSize(15)
  text("NOTE : PRESS UP_ARROW TO FEED DOG MILK",150,15);
  //add styles here

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  if(x>=0){
  x = x-1
  }else{
    x=0;
  }
  database.ref("/").update({
    food:x
  })
}

