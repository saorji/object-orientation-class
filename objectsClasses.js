let person = {
  firstName: "Chanandler",
  lastName: "Bong",
  age: 35,
  likes: ["making jokes", "can i be any more weird", "basketball"],
};

// using dot notation access the firstName
console.log(person.firstName);

// using bracket notation access the lastName
console.log(person["lastName"]);

//using dot notation access 2nd like
console.log(person.likes[1]);

// Object Destructuring

let meal = {
  appetizzer: "chips & salsa",
  entree: "chille relleno",
  dessert: "churros",
  drink: "horchata",
};

// using object destructuring, desstructure the dessert property off of the meal object

// let {dessert} = meal;
// let dessert = meal.dessert
let { dessert, drink } = meal;
console.log(dessert, drink);

console.log(`${dessert} goes well with ${drink}`);

//lets destructure
let { appetizzer, entree } = meal;
console.log(`${appetizzer} goes well with ${entree}`)

// lets destructure the drinks and rename it

let {drink:bestDrinkever} = meal
console.log(bestDrinkever)

//looping using a for-in loop
// for(let  key in person){
//     console.log(key)
// }

for (let key in person){
    console.log(person[key])
}

// add property
// let add a job key to the person object with value of choice using do notation

person.job = `data engineer`

// lets add pets (array) using bracket notation

person['pets'] = ['chicken', 'duck']
console.log(person)

// deleting properties

let teams = {
    teamOne:['ryan','patrick','harry','haywood,'],
    teamTwo:['jilli','emily','kellie','devin','devin e'],
}

//deleting teamTwo
delete teams.teamTwo

//Classes
class dog {
    constructor(name,breed,age){
        this.name = name,
        this.breed = breed,
        this.age = age
    }

    greeting(){
        console.log(`Hi, my name is ${this.name} and i am ${this.age}year old ${this.breed}`)
    }
}

let lassie = new dog('lassie','collie',7)

console.log(lassie)

let beethoven = new dog('Beethoven','st.bernard',2)
console.log(beethoven)

lassie.greeting()
beethoven.greeting()

//now we can loop over our instance of dog

for (key in lassie){
    console.log(lassie[key])
}

//extending class

class Puppy extends dog {
    constructor(name,breed,age,trainingLevel){
        super(name,breed,age)

        this.trainingLevel = trainingLevel
    }
}

let scrappyDoo = new Puppy('scrappy','great-dane',1,3)
console.log(scrappyDoo)