type Car = {
  model: string;
  price: number;
};

type FinalCar = Readonly<Car>;

const car: Car = {
  model: "Aygo",
  price: 12300,
};

car.price += 100;

const finalCar: FinalCar = {
  model: "Yaris",
  price: 16700,
};

// finalCar.price += 0; => error
