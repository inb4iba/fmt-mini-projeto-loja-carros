const carBrands = [];
const carModels = [];
const cars = [];

function registerBrand(brand) {
  carBrands.push(brand);
  console.log(`Marca ${brand} cadastrada com sucesso!`);
  console.log(carBrands);
}

function registerModel(model, brand) {
  carModels.push({ model, brand });
  console.log(`Modelo ${model} cadastrada com sucesso!`);
  console.log(carModels);
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
  console.log(cars);
}

function getAllCars() {
  return cars;
}

// for (let i = 1; i <= 3; i++) {
//   registerBrand(`Marca ${i}`);
//   registerModel(`Modelo ${i}`, `Marca ${Math.round(i / 2)}`);
//   registerCar(
//     `Modelo ${i}`,
//     `Marca ${Math.round(i / 2)}`,
//     20 * i,
//     50000 - i * 10000,
//     "preto"
//   );
// }

window.onload = (e) => {
  const resObj = {};
  const formTag = document.location.hash.replace("#", "");
  document.location.search
    .replace("?", "")
    .split("&")
    .map((item) => {
      const splitItem = item.split("=");
      resObj[splitItem[0]] = splitItem[1];
    });

  console.log(resObj);

  switch (formTag) {
    case "brand":
      registerBrand(resObj.brand);
      break;
    case "model":
      registerModel(resObj.model, resObj.brand);
  }
};
