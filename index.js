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

        
        