function getAllVehicles() {
  return JSON.parse(localStorage.getItem("vehicles")) || [];
}

function displayVehicles() {
  const vehicles = getAllVehicles();

  for (const vehicle of vehicles) {
    document.querySelector(".container").appendChild(createCard(vehicle));
  }
}

function createCard(vehicle) {
  const card = document.createElement("div");
  card.classList = "card";
  card.innerHTML = `
    <img src="${vehicle.image}"/>
    <p class="model">${vehicle.model.name} - <span class="brand">${vehicle.model.brand}</span></p>
    <p class="color">${vehicle.color}</p>
    <div class="flex mt">
      <p class="km">${vehicle.km}km</p>
      <p class="value">R$${vehicle.value}</p>
    </div>
  `;
  return card;
}

displayVehicles();
