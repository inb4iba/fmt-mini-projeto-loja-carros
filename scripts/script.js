const carBrands = [];
const carModels = [];
const cars = [
  {
    model: "Modelo 1",
    brand: "Marca 1",
    km: 15000,
    value: 45000,
    color: "preto",
    image: null,
  },
  {
    model: "Modelo 2",
    brand: "Marca 1",
    km: 50000,
    value: 60000,
    color: "azul",
    image: null,
  },
  {
    model: "Modelo 3",
    brand: "Marca 2",
    km: 19000,
    value: 32500,
    color: "preto",
    image: null,
  },
  {
    model: "Modelo 4",
    brand: "Marca 3",
    km: 22200,
    value: 22000,
    color: "vermelho",
    image: null,
  },
];

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

function displayCars() {
  const cars = getAllCars();

  for (const car of cars) {
    document.querySelector(".container").appendChild(createCard(car));
  }
}

function createCard(car) {
  const card = document.createElement("div");
  card.classList = "card";
  card.innerHTML = `
    <img
      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80"
      alt=""
    />
    <p class="model">${car.model} - <span class="brand">${car.brand}</span></p>
    <p class="color">${car.color}</p>
    <div class="flex mt">
      <p class="km">${car.km}km</p>
      <p class="value">R$${car.value}</p>
    </div>
  `;
  return card;
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
      break;
    case "vehicle":
      registerCar(
        resObj.model,
        resObj.brand,
        resObj.km,
        resObj.value,
        resObj.color
      );
      break;
    default:
      console.log("Sem tag ou tag incorreta");
  }

  displayCars();
};
