// Handle form submission
document.querySelector("form").addEventListener("submit", e => {
  // Cancel default behavior of sending a synchronous POST request
  e.preventDefault();


  fetch("http://localhost:3000/api/countries", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-Type": "application/json"
    },
    //body: JSON.stringify(travelInfo)
  })
    .then(response => response.text())
    .then(result => {
      document.getElementById("output").textContent = result;
    })
    .catch(err => {
      console.error(err.message);
    });

});