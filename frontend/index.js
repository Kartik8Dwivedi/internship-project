//fetching data from backend
async function fetchData() {
    document.querySelector("tbody").innerHTML = "";
  fetch("http://localhost:5000/api/v1/get")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Creating table row depending on the data, limited to 8 rows
      data.data.slice(0, 8).forEach((ticker, i) => {
        const markup = `<tr class="table_row">
            <td>${i + 1}</td>
            <td>${ticker.name}</td>
            <td>${ticker.last}</td>
            <td>${ticker.buy} / ${ticker.sell}</td>
            <td>${ticker.volume}</td>
            <td>${ticker.base_unit}</td>
        </tr>`;
        // Inserting markup on tbody
        document.querySelector("tbody").insertAdjacentHTML("beforeend", markup);
      });
    })
    .catch((error) => console.log(error));
}

async function updateData() {
  await fetch("http://localhost:5000/api/v1/fetch");
  await fetchData();
}

fetchData();

const toggle = document.querySelector(".toogle_btn");
//toggle button functionality for light/dark mode
toggle.onclick = function () {
  toggle.classList.toggle("active");
  document.body.classList.toggle("light_theme");
};

let timer = document.querySelector(".timer");
let timeleft = 60;
let downloadTimer = setInterval(function () {
  if (timeleft <= 0) {
    timeleft = 60;
    updateData();
  } else {
    timer.innerHTML = timeleft;
  }
  timeleft -= 1;
}, 1000);
