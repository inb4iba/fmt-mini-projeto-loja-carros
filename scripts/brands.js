const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

function registerBrand() {
  const carBrands = JSON.parse(localStorage.getItem("carBrands")) || [];
  const brand = form.querySelector("#brand").value;
  carBrands.push(brand);
  console.log(`Marca cadastrada com sucesso!`);
  localStorage.setItem("carBrands", JSON.stringify(carBrands));
}
