//* Nominal vs Structural

class Car {
  make: string
  model: string
  year: number
  isElectric: boolean
}

class Truck {
  make: string
  model: string
  year: number
  towingCapacity: number
}

const vehicle = {
  make: 'Honda',
  model: 'Accord',
  year: 2017,
}

function printCar(car: {
  make: string
  model: string
  year: number
}) {
  console.log(`${car.make} ${car.model} (${car.year})`)
}

printCar(new Car()) //✔️ Fine
printCar(new Truck()) //✔️ Fine
printCar(vehicle) //✔️ Fine

// The function printCar doesn’t care about which constructor its argument came from, it only cares about whether it has:

// A make property that’s of type string
// A model property that’s of type string
// A year property that’s of type number

export default {}
