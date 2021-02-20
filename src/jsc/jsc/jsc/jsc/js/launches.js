var launchesUrl = "https://api.spacexdata.com/v3/launches/upcoming";
fetch(launchesUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    upcomingLaunches(json);
})
    .catch(function (error) {
    console.log(error);
});
function upcomingLaunches(json) {
    var launches = document.querySelector(".liveFeed");
    json.forEach(function (launch) {
        var timestamp = launch.launch_date_unix;
        var date = new Date(timestamp * 1000);
        var formatted = ('0' + date.getDate()).slice(-2) + ' - ' + ('0' + (date.getMonth() + 1)).slice(-2) + ' - ' + date.getFullYear();
        var payloadMass = "TBA";
        if (launch.rocket.second_stage.payloads[0].payload_mass_kg == null) {
            launch.rocket.second_stage.payloads[0].payload_mass_kg = payloadMass;
        }
        var html = "";
        html += "\n             <div class=\"mission-details\">\n                   <h1 class=\"mission-name\">" + launch.mission_name + "</h1>\n                   <p class=\"launch-date\">Launch Date:<br>" + formatted + "</p>\n                   <p class=\"rocket-type\">Rocket: " + launch.rocket.rocket_name + "</p>\n                   <p class=\"payload\">Payload: " + launch.rocket.second_stage.payloads[0].payload_type + "</p>\n                   <p class=\"mass-kg\">Mass KG: " + launch.rocket.second_stage.payloads[0].payload_mass_kg + "</P>\n              </div>";
        launches.innerHTML += html;
    });
}
