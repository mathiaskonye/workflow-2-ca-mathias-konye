
const launchesUrl: string = "https://api.spacexdata.com/v3/launches/upcoming";

fetch(launchesUrl)
.then(function(response) { 
    return response.json();
  })
  .then(function(json) {
    upcomingLaunches(json);
  })
  .catch(function(error) {
    console.log(error);
  });

function upcomingLaunches(json: any) {

  let launches: Element = document.querySelector(".liveFeed");

json.forEach(function(launch: any) { 

    const timestamp: any = launch.launch_date_unix;
    const date: Date = new Date(timestamp * 1000);
    const formatted: string = ('0' + date.getDate()).slice(-2) + ' - ' + ('0' + (date.getMonth() + 1)).slice(-2) + ' - ' + date.getFullYear();

    let payloadMass: string = "TBA";

if (launch.rocket.second_stage.payloads[0].payload_mass_kg == null) {
      launch.rocket.second_stage.payloads[0].payload_mass_kg = payloadMass;
    }

    let html: string = "";
    html += `
             <div class="mission-details">
                   <h1 class="mission-name">${launch.mission_name}</h1>
                   <p class="launch-date">Launch Date:<br>${formatted}</p>
                   <p class="rocket-type">Rocket: ${launch.rocket.rocket_name}</p>
                   <p class="payload">Payload: ${launch.rocket.second_stage.payloads[0].payload_type}</p>
                   <p class="mass-kg">Mass KG: ${launch.rocket.second_stage.payloads[0].payload_mass_kg}</P>
              </div>`;

    launches.innerHTML += html;
  });
}

