const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

function registerBrand() {
  const vehicleBrands = JSON.parse(localStorage.getItem("vehicleBrands")) || [];
  const brand = form.querySelector("#brand").value;
  form.querySelector("#brand").value = "";
  vehicleBrands.push(brand);
  console.log(`Marca cadastrada com sucesso!`);
  localStorage.setItem("vehicleBrands", JSON.stringify(vehicleBrands));
}
