class Game {
  constructor(){}
  
  getState(){
   var gameStateref=database .ref("gameState")
   gameStateref.on("value",function(data){
     gameState=data.val();
   })
   
  }

  update(State){
    database.ref("/").update({
      gameState:State
    });
  }

async  start(){
    if(gameState===0){
player=new Player()
var playerCountref=await database.ref("playerCount").once("value");
if(playerCountref.exists()){
playerCount=playerCountref.val();
player.getCount();
}
form=new Form()
form.display();

    }
    car1=createSprite(100,200,200,200)
    car2=createSprite(300,200,200,200)
    car3=createSprite(500,200,200,200)
    car4=createSprite(700,200,200,200)
    cars=[car1,car2,car3,car4]
    }
  play(){
form.hide();
Player.Playerinfo();
if(allplayers!==undefined){
var index =0

var y 
for(var plr in allplayers){
  var x = 0
  index=index+1
x =x+200
y =displayHeight-allplayers[plr].distance
cars[index-1].x = x;
cars[index-1].y=y ;
if(index===player.index){
cars[index-1].shapeColor=red
camera.position.x=displayWidth/2
camera.position.y=cars[index-1].y
}
  
}

}
if(keyIsDown(UP_ARROW)  &&  player.index!==null){
player.distance+=50;
player.update();

}
  }
}
