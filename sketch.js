var player, enemy, missile, enemyGroup, missileGroup;
var playerimg, enemyimg;
var score = 0;



function preload(){
playerimg = loadImage("download.jpg");
enemyimg = loadImage("imagee.jpg");
}




function setup() {
  createCanvas(800,800);
  player = createSprite(400, 700, 50, 50);
  player.addImage("jet", playerimg);
  player.scale = 0.3

enemyGroup = new Group();
missileGroup = new Group();


}

function draw() {
  background("black");

if(keyDown("RIGHT_ARROW")){
player.position.x = player.position.x + 3;
}

if(keyDown("LEFT_ARROW")){
player.position.x = player.position.x - 3;
}

if(missileGroup.isTouching(enemyGroup)){
enemyGroup.destroyEach();
score = score+1;
}
textSize(20)
text("score: "+score, 700,70);


  spawnEnemy();  
  spawnMissile();
  drawSprites();


}


function spawnEnemy(){
if(frameCount % 50 === 0){
enemy = createSprite(random(50,800), 20);
enemy.addImage("enemies", enemyimg);
enemy.velocityY = 10;
enemyGroup.add(enemy);
}
}

function spawnMissile(){
if(keyDown("SPACE")){
missile = createSprite(player.x, player.y, 5, 20);
missile.shapeColor = "red";
missile.velocityY = -10;
missileGroup.add(missile);
}
}