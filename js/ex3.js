const url = "https://thejsway-server.herokuapp.com/api/countries";

const travelInfo = {
  name: "Danielle Gonzalez",
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



fetch(url, {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  },
  body: JSON.stringify(travelInfo)
})
.then()
.catch()