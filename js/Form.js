class Form {
  constructor() {
    this.input=createInput("name");
    this.button=createButton("play")
    this.greeting=createElement("h2")
  }
  hide(){
this.input.hide();
this.button.hide();
this.greeting.hide();
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    
  
    
    this.input.position(displayWidth/2-40,displayHeight/2-80);
    this.button.position(displayWidth/2+30,displayHeight/2);

    
    this. button.mousePressed(()=>{
      this. input.hide();
      this.button.hide();
     
     this. greeting.position(displayWidth/2-70,displayHeight/4)
       player.name=this.input.value();
       player.index=playerCount;
      playerCount+=1;
      player.update();
      player.updateCount(playerCount);
     this. greeting.html("hello"+player.name);
    
    })  
   
    

  }
}
