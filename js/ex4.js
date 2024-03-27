document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  var formData = new FormData(this); // Create FormData object from the form

  var tableBody = document.querySelector('#formDataTable tbody');
  tableBody.innerHTML = ''; // Clear previous table data

  // Iterate over form data and populate the table
  formData.forEach(function(value, key) {
      var row = tableBody.insertRow();
      var cellKey = row.insertCell(0);
      var cellValue = row.insertCell(1);
      cellKey.textContent = key;
      cellValue.textContent = value;
  });
});
