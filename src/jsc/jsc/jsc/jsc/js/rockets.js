var rocketUrl = "https://api.spacexdata.com/v3/rockets";
fetch(rocketUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    rocketDetails(json);
})
    .catch(function (error) {
    console.log(error);
});
function rocketDetails(json) {
    var rockets = document.querySelector(".cardsRockets");
    json.forEach(function (rocket) {
        var html = "";
        html += "<div class=\"rocket-image-container\">\n              <img class=\"rockets-image\" src=\"" + rocket.flickr_images[1] + "\" alt=\"Show Image\"/>\n             </div>\n             <div class=\"rocket-details\">\n                   <h1 class=\"cards-name\">" + rocket.rocket_name + "</h1>\n                   <p class=\"rocket-description\">" + rocket.description + "</p>\n              </div>";
        rockets.innerHTML += html;
    });
}
