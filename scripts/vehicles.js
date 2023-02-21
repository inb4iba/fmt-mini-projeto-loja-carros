const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

function registerVehicles(model, brand, km, value, color) {
  const cars = JSON.parse(localStorage.getItem("cars")) || [];
  cars.push({
    model,
    brand,
    km,
    value,
    color,
  });
  console.log("Veículo cadastrado com sucesso!");
  localStorage.setItem("cars", JSON.stringify(cars));
}
