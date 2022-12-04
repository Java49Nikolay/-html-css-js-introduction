//function f1() {
//   const a = this;
 //   return a;
//}
//const f2 = () => {
 //   const a = this;
 //   return a;
//}
//const f = f1;
//f();
//f2();
//const rectangle = {
//    width : 3,
//   heidht: 5,
//    square: function() {
//     
//   return this.width * this.heidht;
//   },
//    perimeter: function() => {
//       return this.width * 2 + this.heidht * 2;
//    },
//    display: function() {
//        console.log(`square is ${this.square()}; perimetr is ${this.perimeter()}`)
//    }
//}
function Rectangle(width, heidht) {
    this.width = width;
    this.heidht = heidht;
}
Rectangle.prototype.square = function() {
    return this.width * this.heidht;
}
Rectangle.prototype.perimeter = function(){
    return this.width * 2 + this.heidht * 2;
}
const rectangle =new Rectangle(3, 5);
consol.log(rectangle.square());
consol.log(rectangle.perimeter());
//rectangle.display();