const carBrands = [];

function registerBrand(brand) {
  carBrands.push(brand);
  console.log(`Marca ${brand} cadastrada com sucesso!`);
}

for (let i = 1; i <= 3; i++) {
  registerBrand(`Marca ${i}`);
}

console.log(carBrands);
