const rocketUrl = "https://api.spacexdata.com/v3/rockets";

fetch(rocketUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    rocketDetails(json);
  })
  .catch(function(error) {
console.log(error);
  });


function rocketDetails(json: any) {
  let rockets = document.querySelector(".cardsRockets");

  json.forEach(function(rocket) {
    let html = "";
    html += `<div class="rocket-image-container">
              <img class="rockets-image" src="${rocket.flickr_images[1]}" alt="Show Image"/>
             </div>
             <div class="rocket-details">
                   <h1 class="cards-name">${rocket.rocket_name}</h1>
                   <p class="rocket-description">${rocket.description}</p>
              </div>`;

    rockets.innerHTML += html;
  });
}
