//fetch the url
fetch(
  "https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json"
  )

//parse JSON reponse
.then(response => response.json())

//add cells to table
.then(
  paintings => {
    //access table
    const table = document.getElementById('paintings');
    //access table body
    const tableBody = table.createTBody();

    //for each painting, create & fill cells
    paintings.forEach(painting => {
      const row = tableBody.insertRow();
      
      const nameCell = row.insertCell();
      nameCell.textContent = painting.name;

      const yearCell = row.insertCell();
      yearCell.textContent = painting.year;

      const artistCell = row.insertCell();
      artistCell.textContent = painting.artist;
    });
  }
)

//catch
.catch(error => console.error('Error fetching data:', error));