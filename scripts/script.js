function getAllCars() {
  return JSON.parse(localStorage.getItem("cars")) || [];
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

displayCars();
