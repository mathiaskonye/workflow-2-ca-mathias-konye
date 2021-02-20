const apiUrl: string = "https://api.spacexdata.com/v3/launches/next"

fetch(apiUrl)
.then(function(response) {
  return response.json();
})
.then(function(json){
  nextLaunch(json);
})
.catch(function(error){
console.log(error);
})

function nextLaunch(details: any): void {

  const timestamp: any = details.launch_date_unix;
  const date: Date = new Date(timestamp * 1000);
  const formattedDate: any = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2); /* This particular line is inspired by someone at StackOverflow.com */

  const launch: Element = document.querySelector("#timeToLaunch");
  launch.innerHTML = formattedDate;

  const name: Element = document.querySelector("#mission");
  name.innerHTML = details.mission_name;
}

