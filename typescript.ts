// const sum = (a : number, b : number ) => {
//   return a + b;
// }

// const answer = sum(5, 5)
// console.log(answer)

//boolean
let isCool: boolean = true;

// number
let age: number = 56;

// string
let eyeColor: string = "brown";
let favouriteQuote: string = `I'm not old, i'm only ${age}`;

// arrays
let pets: string[] = ["cat", "dogs", "pig"];
let pets2: Array<string> = ["lion", "tiger"];

// object
let wizard: object = {
  a: "John",
};

//null and undefined
let meh: undefined = undefined;
let noo: null = null;

// new feature
// tuple
let basket: [string, number];
basket = ["ball", 5];

// Enum
enum Size {
  Small = 1,
  Medium = 2,
  Large = 3,
}
let sizeName: string = Size[2];

// Any
let whatever: any = "aghhhhhh noooo!!!";
whatever = Size.Small;
whatever = basket; // use any when converting js to ts while dont really care about what type it is

// void  => no return, doesnt return anything
let sing = (): void => {
  console.log("lalalalalala");
};

let dance = (): string => {
  var a: string = "John";
  console.log("dance");
  return a;
};

// never : testing 1.a function never return 2.doesnt have an endpoint
let error = (): never => {
  throw Error("oooops");
};

// interface
interface RobotArmy {
  count: number;
  type: string;
  magic: string;
}

let fightRobotArmy = (robots: RobotArmy) => {
  console.log("FIGHT!");
};
let fightRobotArmy2 = (
  robots: { count: number; type: string; magic: string },
) => {
  console.log("FIGHT!");
};
