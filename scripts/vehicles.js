const models = JSON.parse(localStorage.getItem("vehicleModels"));
const form = document.querySelector("form");
form.addEventListener("submit", (e) => e.preventDefault());

createOptions();

async function registerVehicles() {
  const vehicles = JSON.parse(localStorage.getItem("vehicles")) || [];
  const model = models.find(
    (model) => model.name === form.querySelector("#model").value
  );
  form.querySelector("#model").value = "null";
  const color = form.querySelector("#color").value;
  form.querySelector("#color").value = "";
  const km = form.querySelector("#km").value;
  form.querySelector("#km").value = "";
  const value = form.querySelector("#value").value;
  form.querySelector("#value").value = "";
  const image = await convertImage(form.querySelector("#image"));
  form.querySelector("#image").value = "";

  vehicles.push({
    model,
    color,
    value,
    km,
    image,
  });

  console.log("Veículo cadastrado com sucesso!");
  localStorage.setItem("vehicles", JSON.stringify(vehicles));
}

function createOptions() {
  const modelSelector = form.querySelector("#model");
  models.map(({ name }) => {
    const option = document.createElement("option");
    option.textContent = name;
    option.value = name;
    modelSelector.appendChild(option);
  });
}

function convertImage(fileInput) {
  const file = fileInput.files[0];
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = reject;

    fileReader.readAsDataURL(file);
  });
}
