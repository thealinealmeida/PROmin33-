var player, playerImg, chestImg, bgImg;
var dragon1,dragon2,dragonImg;
var allwalls = [];
var allchests = []
var numOfchests =0
var vy1 = -2;
var vy2 = 2;

var walls = [
    {x:10, y:20, w:1700, h:40},//topbrick
    {x:10, y:450, w:1700, h:40},
    {x:10, y:450,w: 40, h: 900 },//left brick
    {x:600,y:50 , w: 250, h: 40},//reverse stair
    {x:600,y:90 , w: 150, h: 40},//reverse stair
    {x:600,y:130 , w: 80, h: 40}, //reverse stair
    {x:700, y:300, w:250, h:40},//reverse L
    {x:800,y:370, w:50, h:120},//reverse L
    {x:300, y:300, w:250, h:40}, //Reverse L
    {x:200,y:370, w:50, h:120},//RerverseL
    
 { x: 1000, y: 20, w: 2000, h:40 }, //upperbrick
  { x: 1000, y: 450, w: 2000, h: 40 }, // lowerbrick 1
  { x: 900, y: 450, w: 40, h: 700 }, // left brick
  { x: 1100, y: 165, w: 200, h: 250 },//big block
  { x: 1250, y: 420, w: 50, h: 25 },//stairs
  { x: 1300, y: 395, w: 50, h: 25 },//stairs
  { x: 1350, y: 370, w: 50, h: 25 },//stairs
  { x: 1500, y: 370, w: 50, h: 25 },//reverse stairs
  { x: 1550, y: 395, w: 50, h: 25 },//reverse stairs
  { x: 1600, y: 420, w: 50, h: 25 },//reverse stairs
  { x: 1760, y: 150, w: 250, h: 40 },
  { x: 1900, y: 105, w: 40, h: 130 },
  { x: 1950, y: 350, w: 100, h: 250 }
    
];

var chests = [
  { x: 300, y: 380, isCollected: false },
  { x: 800, y: 90, isCollected: false },
  { x: 700, y: 380, isCollected: false },
  { x: 1380, y: 130, isCollected: false },
  { x: 1430, y: 400, isCollected: false },
  { x: 1800, y: 80, isCollected: false }
];

function preload() {
  playerImg = loadImage("1.png");
  chestImg = loadImage("2.png");
 
}



function setup(){
  createCanvas(950, 470);
  player = createSprite(40, height / 2, 50);
 
    
  


  
  for (var i in walls) {
    var brick = createSprite( walls[i].x, walls[i].y, walls[i].w, walls[i].h);
    allwalls.push(brick);
  }
  
  
  for(var j in chests){
    var chest = createSprite(chests[j].x, chests[j].y, chests[j].w, chests[j].h)
    chest.addImage("chest-image", chestImg)
    chest.scale = 0.09;
    allchests.push(chest)    
  }
  
}


function draw(){
  background(bgImg);
    
    
    moveDragon();

  
  // Collision with all walls
  

  

  // Collecting chests
  
  
  
    
    if (keyDown("right")){
         player.x +=10
        }

    if (keyDown("left")){
         player.x -=10
        }

    if (keyDown("up")){
        player.y -=10
    }
    
    if (keyDown("down")){
        player.y +=10
    }
 
 
  drawSprites();
  
}

function moveDragon() {
    
  
   
}




