function registerModel(model, brand) {
  const carModels = JSON.parse(localStorage.getItem("carModels")) || [];
  carModels.push({ model, brand });
  console.log(`Modelo ${model} cadastrada com sucesso!`);
  console.log(carModels);
  localStorage.setItem("carModels", JSON.stringify(carModels));
}
