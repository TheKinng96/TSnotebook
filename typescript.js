// const sum = (a : number, b : number ) => {
//   return a + b;
// }
// const answer = sum(5, 5)
// console.log(answer)
//boolean
var isCool = true;
// number
var age = 56;
// string
var eyeColor = "brown";
var favouriteQuote = "I'm not old, i'm only " + age;
// arrays
var pets = ["cat", "dogs", "pig"];
var pets2 = ["lion", "tiger"];
// object
var wizard = {
    a: "John"
};
//null and undefined
var meh = undefined;
var noo = null;
// new feature
// tuple
var basket;
basket = ["ball", 5];
// Enum
var Size;
(function (Size) {
    Size[Size["Small"] = 1] = "Small";
    Size[Size["Medium"] = 2] = "Medium";
    Size[Size["Large"] = 3] = "Large";
})(Size || (Size = {}));
var sizeName = Size[2];
// Any
var whatever = "aghhhhhh noooo!!!";
whatever = Size.Small;
whatever = basket; // use any when converting js to ts while dont really care about what type it is
// void  => no return, doesnt return anything
var sing = function () {
    console.log("lalalalalala");
};
var dance = function () {
    var a = "John";
    console.log("dance");
    return a;
};
// never : testing 1.a function never return 2.doesnt have an endpoint
var error = function () {
    throw Error("oooops");
};
var fightRobotArmy = function (robots) {
    console.log("FIGHT!");
};
var fightRobotArmy2 = function (robots) {
    console.log("FIGHT!");
};
