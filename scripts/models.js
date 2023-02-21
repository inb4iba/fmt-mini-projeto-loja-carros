const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

createOptions();

function registerModel() {
  const carModels = JSON.parse(localStorage.getItem("carModels")) || [];
  const model = form.querySelector("#model").value;
  const brand = form.querySelector("#brand").value;
  form.querySelector("#model").value = "";
  form.querySelector("#brand").value = "null";
  carModels.push({ model, brand });
  console.log(`Modelo cadastrado com sucesso!`);
  localStorage.setItem("carModels", JSON.stringify(carModels));
}

function createOptions() {
  const brandSelector = form.querySelector("#brand");
  const brands = JSON.parse(localStorage.getItem("carBrands"));
  brands.map((brand) => {
    const option = document.createElement("option");
    option.textContent = brand;
    option.value = brand;
    brandSelector.appendChild(option);
  });
}
