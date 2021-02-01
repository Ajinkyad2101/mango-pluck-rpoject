class Sling{
constructor(bodyA,pointB){
    var options = {
        bodyA: bodyA,
        pointB: pointB,
    }
    this.sling=Constraint.create(options)
    this.pointB=pointB
    World.add(world,this.sling)
}
display(){
    if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    
}
}