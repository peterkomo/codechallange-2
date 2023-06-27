function renderAnimalDetails(animals)// the element with the ID "animal.details
const animalDetails=document.getElementById("animal.details")
animalDetails.innerHTML=
`
<p>id :${animals.id}</p>
<p>name:${animals.name}</p>
<img src="${animals.images}">
<p id ="count>votes:${animals.votes}</p>
<button id="votesButton">Add Votes</button>
`;
const votesButton=document.getElementById("votesButton")// Get the button element with the ID "votesButton
votesButton.addEventListener('click',function(){
    animals.votes++//increses thenvote property by +1
    const votesCount=document.getElementById('count')
    votesCount.textContent='votes${details.votes}'
})


function getAnimalDetails(id) {
    fetch(`http://localhost:3000/characters/${id}`)//Send a GET request to fetch animal details based on the provided ID
      .then((response) => response.json())// Parse the response as JSON
      .then((animals) => renderAnimalDetails(animals));// Call renderAnimalDetails with the parsed JSON data
  }
document.addEventListener('DOMContentLoaded',function(){
const animalNames=document.querySelectorAll(`.allaboutanimals`)
animalNames.forEach(function(name){
    name.addEventListener('click',function(){
        const id=name.dataset.id;
        document.getElementById("allaboutanimals").innerHTML="";
        getAnimalDetails(id)
        //The code wraps the logic inside an event listener for the "DOMContentLoaded" event, which fires when the DOM  has been fully loaded and parsed.
        //For each element, a click event listener is added using the addEventListener method. This sets up a callback function that will execute when the element is clicked.
    })
})


})
