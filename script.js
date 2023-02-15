const carBrands = [];
const carModels = [];
const cars = [];

function registerBrand(brand) {
  carBrands.push(brand);
  console.log(`Marca ${brand} cadastrada com sucesso!`);
}

function registerModel(model, brand) {
  carModels.push({ model, brand });
  console.log(`Modelo ${model} cadastrada com sucesso!`);
}

function registerCar(model, brand, km, value, color) {
  cars.push({
    model,
    brand,
    km,
    value,
    color,
  });
  console.log("Veículo cadastrado com sucesso!");
}

for (let i = 1; i <= 3; i++) {
  registerBrand(`Marca ${i}`);
  registerModel(`Modelo ${i}`, `Marca ${Math.round(i / 2)}`);
  registerCar(
    `Modelo ${i}`,
    `Marca ${Math.round(i / 2)}`,
    20 * i,
    50000 - i * 10000,
    "preto"
  );
}

console.log(carBrands);
console.log(carModels);
console.log(cars);
