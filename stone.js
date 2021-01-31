class Stone{
constructor(x,y,width,height){
  var  op={
        isStatic:false,
        restitution:0.4,
        friction:1,
        density:1.2,
    }
this.body=Bodies.rectangle(x,y,width,height,op)
this.width=width
this.height=height
this.image=loadImage("images/stone.png")
World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,100,100)
}
}