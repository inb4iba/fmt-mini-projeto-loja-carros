function getAllVehicles() {
  return JSON.parse(localStorage.getItem("vehicles")) || [];
}

function displayVehicles() {
  const vehicles = getAllVehicles();

  for (const vehicle of vehicles) {
    document.querySelector(".container").appendChild(createVehicled(vehicle));
  }
}

function createVehicled(vehicle) {
  const vehicled = document.createElement("div");
  vehicled.classList = "vehicled";
  vehicled.innerHTML = `
    <img
      src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=270&q=80"
      alt=""
    />
    <p class="model">${vehicle.model} - <span class="brand">${vehicle.brand}</span></p>
    <p class="color">${vehicle.color}</p>
    <div class="flex mt">
      <p class="km">${vehicle.km}km</p>
      <p class="value">R$${vehicle.value}</p>
    </div>
  `;
  return vehicled;
}

displayVehicles();
