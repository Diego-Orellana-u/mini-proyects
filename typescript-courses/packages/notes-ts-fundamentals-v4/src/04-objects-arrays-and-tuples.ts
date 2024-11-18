//* Objects
let myCar = {
  make: 'toyota',
  model: 'corolla',
  year: 2001,
}

let car: {
  make: string
  model: string
  year: number
} = myCar

console.log(car)

//? A function that prints info about a car to stdout
function printCar(car: {
  make: string
  model: string
  year: number
  chargeVoltage?: number
}) {
  let str = `${car.make} ${car.model} (${car.year})`
  car.chargeVoltage
  // car.color
  if (typeof car.chargeVoltage !== 'undefined')
    str += `// ${car.chargeVoltage}v`
}
// printCar(car)

//* Optional properties
//? Insert into function printCar
// let str = `${car.make} ${car.model} (${car.year})`
// car.chargeVoltage
// if (typeof car.chargeVoltage !== "undefined")
//   str += `// ${car.chargeVoltage}v`

printCar({
  //? original fn works
  make: 'Honda',
  model: 'Accord',
  year: 2017,
})

printCar({
  //? optional property works too!
  make: 'Tesla',
  model: 'Model 3',
  year: 2020,
  chargeVoltage: 220,
})

//* Excess property checking

// const myArg = {
//     make: "Tesla",
//     model: "Model 3",
//     year: 2020,
//     color: "RED", //? EXTRA PROPERTY
// }

printCar({
  ...{
    make: 'Tesla',
    model: 'Model 3',
    year: 2020,
    color: 'RED', //? EXTRA PROPERTY
  },
})

// printCar({
//       make: "Tesla",
//       model: "Model 3",
//       year: 2020,
//       color: "RED", //? EXTRA PROPERTY
//   })

// printCar({
//   make: "Tesla",
//   model: "Model 3",
//   year: 2020,
//   color: "RED" // extra property
// } as { make: string; model: string; year: number; chargeVoltage?: number });

//* Index signatures

//? Dictionary of phone #s
const phones: {
  [k: string]: {
    country: string
    area: string
    number: string
  }
} = {
  home: { country: '+1', area: '211', number: '652-4515' },
  work: { country: '+1', area: '670', number: '752-5856' },
  fax: { country: '+1', area: '322', number: '525-4357' },
}

//? Model as an index signature
// const phones: {

// } = {}

//*  Array Types

const fileExtensions: Array<string> = ['js', 'ts']
const fileExtensionsTwo: string[] = ['js', 'ts']

//        ^? string[]

// const cars = [ //? Let's look at an array of objects
//     {
//         make: "Toyota",
//         model: "Corolla",
//         year: 2002,
//     },
// ]

//* Tuples
let myCar2 = [
  2002, // Year
  'Toyota', // Make
  'Corolla', // Model
]

const [year, make, model] = myCar2 //✔️ Destructuring

//? Inference doesn't work very well for tuples
myCar2 = ['Honda', 2017, 'Accord', 'Sedan'] //! Wrong convention
console.log(year)

let myCar3: [number, string, string] = [2002, 'Toyota', 'Corolla']
myCar3 = ['Honda', 2017, 'Accord'] //! Wrong convention
myCar3 = [2017, 'Honda', 'Accord', 'Sedan'] //! Too many elements

//*  `readonly` tuples
const numPair: [number, number] = [4, 5] //✔️ Valid
const numTriplet: [number, number, number] = [7] //! Invalid

numPair.length //? [number, number] length

numPair.push(6) // [4, 5, 6]
numPair.pop() // [4, 5]
numPair.pop() // [4]
numPair.pop() // []

numPair.length //! ❌ DANGER ❌

const roNumPair: readonly [number, number] = [4, 5]
roNumPair.length
roNumPair.push(6) // [4, 5, 6] //! Not allowed
roNumPair.pop() // [4, 5] //! Not allowed

/**/

export default {}

// Here we have an array containing three elements, and we are representing an implicit convention where the first element will be the year, the second element will be the maker, and the third element will be the model.
