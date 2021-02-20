var apiUrl = "https://api.spacexdata.com/v3/launches/next";
fetch(apiUrl)
    .then(function (response) {
    return response.json();
})
    .then(function (json) {
    nextLaunch(json);
})
    .catch(function (error) {
    console.log(error);
});
function nextLaunch(details) {
    var timestamp = details.launch_date_unix;
    var date = new Date(timestamp * 1000);
    var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2); /* This particular line is inspired by someone at StackOverflow.com */
    var launch = document.querySelector("#timeToLaunch");
    launch.innerHTML = formattedDate;
    var name = document.querySelector("#mission");
    name.innerHTML = details.mission_name;
}
