// Add your Circle class here
class Circle{
    constructor(radius){
        this.radius = radius
        this.pi = Math.PI

}
get diameter(){
    return this.radius*2


}
get circumference(){
    return this.pi*(this.radius*2)
    
}
get area(){
    return this.pi * (this.radius*this.radius)
    
}

set diameter(newDiameter){
    this.radius = newDiameter/2


}
set circumference(newCir){
    this.radius = (newCir/Math.PI)/2
    
}
set area(newArea){
    this.radius = Math.sqrt(newArea/Math.PI)
    
}


}