// Function to render animal details on the page
function renderAnimalDetails(animal) {
    const animalDetails = document.getElementById("allaboutanimals");
    animalDetails.innerHTML = `
      <p>id: ${animal.id}</p>
      <p>name: ${animal.name}</p>
      <img src="${animal.image}">
      <p id="count">votes: ${animal.votes}</p>
      <button id="votesButton">Add Votes</button>
    `;
  
    const votesButton = document.getElementById("votesButton");
    votesButton.addEventListener("click", function () {
      animal.votes++;
      const votesCount = document.getElementById("count");
      votesCount.textContent = `votes: ${animal.votes}`;
    });
  }
  
  // Function to fetch and retrieve animal details based on ID
  function getAnimalDetails(id) {
    fetch(`http://localhost:3000/characters/${id}`)
      .then((response) => response.json())
      .then((animal) => renderAnimalDetails(animal));
  }
  
  // Event listener when the DOM content has been loaded
  document.addEventListener("DOMContentLoaded", function () {
    const animalNames = document.querySelectorAll(".animalsss");
    animalNames.forEach(function (name) {
      name.addEventListener("click", function () {
        const id = name.dataset.id;
        document.getElementById("allaboutanimals").innerHTML = "";
        getAnimalDetails(id);
      });
    });
  });