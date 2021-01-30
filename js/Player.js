class Player {
  constructor(){

    this.name=null
    this.index=null
    this.distance=0
  }

  getCount(){
    var Countref=database .ref("playerCount")
   Countref.on("value",(data)=>{
    playerCount=data.val();
   })
  }

  updateCount(count){
    database.ref("/").update({
   playerCount:count
    });
    
  }

  update(){
    var away="players/player"+this.index
    database.ref(away).set({
      name:this.name,
     distance:this.distance
    })
  }
  
 static Playerinfo(){

   var sub=database.ref("players");
   sub.on("value",(data)=>{
     allplayers=data.val();
   })
 }

}
