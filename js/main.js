// let dataLoc={};
// let dataCurrent={};
let dataForcaste = [];
let input = "";
let inputCountry = document.getElementById("inputCountry");

inputCountry.addEventListener("input", function () {
  input = inputCountry.value;
  addData(input);
});
// 07112
let day = "";
let date = "";
async function addData(input) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=a139dc33cab24d9684c123117241201&days=3&q=${input}`
  );
  data = await response.json();
  console.log(data);

  dataForcaste = data.forecast.forecastday;

  displayData();
}

addData((input = "cairo"));

function displayData(input) {
  let cartona = "";
  for (let i = 0; i < dataForcaste.length; i++) {
    date = new Date(dataForcaste[i].date);
    day = date.toLocaleString("en-us", { weekday: "long" });
    cartona += ` <div class="col-lg-4 g-3">
        <div>
         <div class="day d-flex justify-content-between px-2">
            <p>${day}</p>
            <p>${dataForcaste[i].date}</p>
          </div>
          <div class="deg">
          ${data.location.country}
          <p>${data.location.name}</p>
    <div class=" d-flex justify-content-between align-items-center ">
  <div class="degree" >
    <p>${dataForcaste[i].day.avgtemp_c}<span style='font-size:80px;'>&#8451;</span>  </p>
  </div>   
  <div>
    <img class="w-100" src=https:${dataForcaste[i].day.condition.icon} alt="sunny">
  </div>
    </div>
    <p class="text-info p-1">${dataForcaste[i].day.condition.text}</p>
    <span class="m-1">
    <img class="px-1" src="../icon-umberella.png" alt="umberella">
      20%
    </span>
    <span>
      <img src="../icon-wind.png" alt="wind">
      18km/h</span>
    <span>
      <img src="../icon-compass.png" alt="compass">
      East
    </span>
  
          </div>
        </div>
      
      </div>

`;
    document.getElementById("weather").innerHTML = cartona;
  }
}
