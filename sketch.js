//Create variables here
var database;
var dog, happyDog, foodS, foodStock, dogHappy;

function preload()
{
  //load images here
 
  dogIMG = loadImage("images/dogImg.png");
  dogHappy = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  dog = createSprite(200,200,20,20);
  dog.addImage("dog", dogIMG);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
 
}

function draw() {  
  background(46, 139, 87);

  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.changeImage("dog", dogHappy);
  }

  text("food stock = " + foodStock, 50, 50)

 
  

  drawSprites();
  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x = x - 1;
  }
  
  database.ref('/').update({
    food:x
  })
}



