const carBrands = [];
const carModels = [];

function registerBrand(brand) {
  carBrands.push(brand);
  console.log(`Marca ${brand} cadastrada com sucesso!`);
}

function registerModel(model, brand) {
  carModels.push({ model, brand });
  console.log(`Modelo ${model} cadastrada com sucesso!`);
}

for (let i = 1; i <= 3; i++) {
  registerBrand(`Marca ${i}`);
  registerModel(`Modelo ${i}`, `Marca ${Math.round(i / 2)}`);
}

console.log(carBrands);
console.log(carModels);
