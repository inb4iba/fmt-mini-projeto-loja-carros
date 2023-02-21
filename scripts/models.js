const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

createOptions();

function registerModel() {
  const vehicleModels = JSON.parse(localStorage.getItem("vehicleModels")) || [];
  const model = form.querySelector("#model").value;
  const brand = form.querySelector("#brand").value;
  form.querySelector("#model").value = "";
  form.querySelector("#brand").value = "null";
  vehicleModels.push({ name: model, brand });
  console.log(`Modelo cadastrado com sucesso!`);
  localStorage.setItem("vehicleModels", JSON.stringify(vehicleModels));
}

function createOptions() {
  const brandSelector = form.querySelector("#brand");
  const brands = JSON.parse(localStorage.getItem("vehicleBrands"));
  brands.map((brand) => {
    const option = document.createElement("option");
    option.textContent = brand;
    option.value = brand;
    brandSelector.appendChild(option);
  });
}
