//create travel info array
const travelInfo = {
  name: "Danielle",
  countries: [
    {
      name: "Mexico",
      year: 2021
    },
    {
      name: "England",
      year: 2015
    },
    {
      name: "France",
      year: 2015
    },
    {
      name: "Switzerland",
      year: 2015
    }
  ]
};


//send JSON data to server
fetch("https://thejsway-server.herokuapp.com/api/countries", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelInfo)
})
.then(response => response.text()
)
.then(result => {
  document.getElementById("result").textContent = result;
})
.catch(error => {
    console.error(error);
  }
);