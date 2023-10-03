//Object Destructoring 1

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

//what does this code return? 

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

//Object Destructoring 2

let planetFacts = {
    numplanets: 8,
    neptune: 1846,
    mars: 1659
  };
  
  let {numplanets, ...discoveryYears} = planetFacts;

  //what does this code return
  
  console.log(discoveryYears); // {neptune : 1846, mars: 1659}

//Object Destructuring 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }

  //what does this code return
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) 
  // 'Your name is Alejandro and you like purple'
  getUserData({firstName: "Melissa"})
  // 'Your name is Melissa and you like green'
  getUserData({}) 
  // 'Your name is undefined and you like green'

//Array Destructoring 1

let [first, second, third] = ["Maya", "Marisa", "Chi"];

//what does this code return 

console.log(first); // 'Maya'
console.log(second); // 'Marisa'
console.log(third); // 'Chi'

//Array Destructoring 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]

  // what does this code return?
  
  console.log(raindrops); // "Raindrops on roses"
  console.log(whiskers); // "whiskers on kittens"
  console.log(aFewOfMyFavoriteThings); 
  // ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

  //Array Destructoring 3

  let numbers = [10, 20, 30];
  [numbers[1], numbers[2]] = [numbers[2], numbers[1]]

  //what does this code return?
  
  console.log(numbers) // [10, 30, 20];

  //ES2015 version

  const obj = { 
    numbers : {
        a : 1,
        b : 2
    }
};  

const {numbers : {a}} = obj;
const {numbers : {b}} = obj;

var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

//ES2015 version

let arr = [1, 2];
[arr[1], arr[0]] = [arr[0], arr[1]]

//raceResults()

const raceResults = ([first, second, third, ...rest]) => {
    return {
        first, 
        second, 
        third, 
        rest
    }
}
