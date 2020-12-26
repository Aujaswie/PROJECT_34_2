var dog, happydog;
var database;
var foodS, foodStock;

function preload()
{
  dogImg = loadImage ("images/dogImg.png");
  dogHappy = loadImage ("images/dogHappy.png");
}

function setup() {
  createCanvas(1000, 1000);
  dog = createSprite (500,500,10,10);

  dog.addImage (dogImg );

  database = firebase.database();

  foodStock = database.ref('food');
  
  foodStock.on ("value",readStock);

  
}


function draw() {  
 background (46, 139, 87);

 if(keyWentDown(UP_ARROW)){
   writeStock (foodS);
   dog.addImage (dogHappy);
   textSize (50);
   fill ("lime");
   stroke ("lime");
 
   text ("dog is happy", 450 ,100);
 }

  drawSprites();

 

}

function readStock (data){
    foodS = data.val ();
}

function writeStock (x) {

  if (x <= 0) {
    x = 0 
  }
  else {
    x= x-1
  }

  database.ref ('/').update({
    Food: x
  })
}


