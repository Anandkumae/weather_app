document.addEventListener("DOMContentLoaded", async (event) => {
  const url = "https://weather-api138.p.rapidapi.com/weather?city_name=Mumbai";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "5ed1e50421msh6d750a7d8a666efp169ab3jsnbbcc9d6d97fc",
      "x-rapidapi-host": "weather-api138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    // Update HTML elements with fetched data
    if (data.coord) {
      document.getElementById("coord").innerHTML = JSON.stringify(data.coord);
    }
    if (data.weather) {
      document.getElementById("weather").innerHTML = JSON.stringify(
        data.weather
      );
    }
    if (data.base) {
      document.getElementById("base").innerHTML = JSON.stringify(data.base);
    }
    if (data.stations) {
      document.getElementById("stations").innerHTML = JSON.stringify(
        data.stations
      );
    }
    if (data.main) {
      document.getElementById("main").innerHTML = JSON.stringify(data.main);
    }
    if (data.visibility) {
      document.getElementById("visibility").innerHTML = JSON.stringify(
        data.visibility
      );
    }
    if (data.wind) {
      document.getElementById("wind").innerHTML = JSON.stringify(data.wind);
    }
    if (data.clouds) {
      document.getElementById("clouds").innerHTML = JSON.stringify(data.clouds);
    }
    if (data.dt) {
      document.getElementById("dt").innerHTML = JSON.stringify(data.dt);
    }
    if (data.sys) {
      document.getElementById("sys").innerHTML = JSON.stringify(data.sys);
    }
    if (data.timezone) {
      document.getElementById("timezone").innerHTML = JSON.stringify(
        data.timezone
      );
    }
    if (data.id) {
      document.getElementById("id").innerHTML = JSON.stringify(data.id);
    }
    if (data.name) {
      document.getElementById("name").innerHTML = JSON.stringify(data.name);
    }
    if (data.cod) {
      document.getElementById("cod").innerHTML = JSON.stringify(data.cod);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
function toggleBackgroundColor() {
  const body = document.body;
  body.classList.toggle("black-background");
}
