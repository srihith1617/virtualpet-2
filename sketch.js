//Create variables here
var dog, happyDog, database, foodS, foodStock, thedog, 
foodObj, buttonfeedpet, buttonaddfood, fedtime, lastFed;
var foodObj;
function preload()
{
	//load images here
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  thedog = createSprite(200,200,60,60);
  thedog.scale = 0.3;
  thedog.addImage(dog);



  foodStock=database.ref('food')
  foodStock.on("value",readStock);
  foodObj = new food(foodS)
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood = createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);
  foodObj.getFeedTime(lastFed);
}


function draw() {  
background(46,139,87)
  drawSprites();
  foodObj.display();
  //add styles here
text(foodS,200,200)
fedtime = database.ref("FeedTime")
fedtime.on("value", function(data){lastFed=data.val()})
console.log(lastFed)
  fill(255,255,254);
  textSize(15);
  if (lastFed>=12){
    text("Last Feed : "+ lastFed%12 + " PM", 350,30);
  } else if(lastFed==0) {
    text("Last Feed : 12 AM",350,30);
  } else {
    text("Last Feed : "+lastFed + " AM",350,30);
  }
}
function writeStock(x) {
  if(x<=0) {
    x=0;
  }else{
    x=x-1;
  }
  database.ref("/").update({
food:x})
thedog.addImage(happyDog);
}
function readStock(data) {
  foodS = data.val();
  foodObj.updatefoodStock(foodS)
}

function addFoods() {
  foodS++;
  database.ref('/').update({food:foodS})
}
function feedDog() {
  writeStock(foodS);
  database.ref("FeedTime").update({
    FeedTime:hour() })
}
/*function feedDog() {
  thedog.addImage(happyDog);
  foodObj.updateFoodStock(foodObj.getFoodStock(data)-1);
  database.ref("food").update({
    food:foodStock})
    database.ref("FeedTime").update({
      FeedTime:hour() })
}*/





