class launcher{
    constructor(body,point){
        var options ={
            bodyA:body,
            pointB:point,
            stiffness:0.004,
            length:1
        }
        this.bodyA=body
        this.pointB=point
        this.body=Constraint.create(options)
        World.add(world,this.body)
    }
    display(){
        var p1=this.bodyA.position
        var p2=this.pointB
        strokeWeight(3)
       line(p1.x,p1.y,p2.x,p2.y)
       
    }

    
}