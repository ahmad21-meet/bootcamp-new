class square{
    constructor(a,b,c,d){
        this.a =a;
        this.b =b;
        this.c =c;
        this.d =d;
    }
}
function Square (a,b,c,d) {
    this.a =a ;
    this.b =b;
    this.c =c;
    this.d =d;

}
const  scol =  new Square(1,1,1,1);

square.prototype.isSquare = function (){
    if(this.a ==this.b&&this.b==this.c&&this.c==this.d){
        return true
     }
     return false
  }

  
console.log(Object.getPrototypeOf(a));
console.log(a.isSquare());
