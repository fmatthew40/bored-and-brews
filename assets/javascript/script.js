var calendarDiv = document.querySelector("#calendar");
var modal = document.getElementById("modal");
var cityInput = document.getElementById("city");
var breweryList = document.getElementById("breweries");
var searchBtn = document.getElementById("search");
var modalExit = document.getElementsByClassName("close")[0];
var activityArray = [];
var now = new Date();
var timeToMidnight = getTimetoMidnight(now);
var day = "";
var activity = "";
var brew = "";
// get time in miliseconds to set timeout 
function getTimetoMidnight (now) {
  var mili = now.getMilliseconds();
  var sec = now.getSeconds() * 1000;
  var min = now.getMinutes() * 60 * 1000;
  var hour = now.getHours() *60 *60 * 1000;
  var timeinMil = mili + sec + min + hour;
  var timetomidnight = (24 * 60 * 60 * 1000) - timeinMil;
  return timetomidnight;
}

//time out funcition to set interval to clear calendar monday at midnight

setTimeout(() => {setInterval((today) => {
  var today = now.getDay();
   if (today === 1) {
    activityArray = [];
    localStorage.setItem("activities", JSON.stringify(activityArray));
    loadActivites();
  }
  else {
    return;
  }
}, (24 * 60 * 60 * 1000));
  
}, timeToMidnight);


// handler to call modal when a day is clicked
var divHandler = function(event) {
    day = event.target;
    if (day.matches(".day>*, .day")) {
      day = day.closest("article").getAttribute("id");
      setVariables(day);
      modalInputFunction();
    }
}

// set global day, brew and activity variables
var setVariables = function (day) {
  activity = document.getElementsByClassName(day + "-activity")[0];
  brew = document.getElementsByClassName(day + "-brews")[0];
}


var modalInputFunction = function () {
    modal.style.display = "block";

    // clear modal brewery city search and display
    cityInput.value = "";
    breweryList.textContent = "";
}

// When the user clicks on <span> (x), close the modal
modalExit.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks the search button an api fetch call will occur to find breweries near the city they searched
var getBrews = function() {
  var city = cityInput.value.replace(/ /g,"_");

  var breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&per_page=5"

  fetch(breweryUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {

          // Clear prior searches from ordered list
          breweryList.textContent = "";

          // Call function to display breweries in modal
          displayBreweries(data);
        })
      }
    })
}

// Function to display breweries in an ordered list under the city search input field 
var displayBreweries = function(breweries) {

  for(i = 0; i < breweries.length; i++) {
    var breweryName = document.createElement("li");
    breweryName.className = "brew"; 
    breweryName.id = "brew" + i;
    breweryName.textContent = breweries[i].name;
    breweryList.append(breweryName);
  }
    // Call function to display brewery on calendar on click
    breweryList.addEventListener("click", displaySelectedBrewery);
}

// Function to display brewery on weekday on click
var displaySelectedBrewery = function(event) {

  var selectedListItem = event.target
  if(selectedListItem.matches(".brew")) {
    brew.innerHTML = selectedListItem.textContent;
    saveActivites();
  }
}


// save activities and breweries in local storage
var saveActivites = function() {
  var arrayObj = {"day": day, "activity": activity.innerHTML, "brew":brew.innerHTML};
  activityArray.push(arrayObj);
  // save object to local storage array
  localStorage.setItem("activities", JSON.stringify(activityArray));
}

// load activites and breweries from local storage
var loadActivites = function () {
  var storedData = JSON.parse(localStorage.getItem("activities"));
  if (!storedData) {
    activityArray = [];
  }
  else {
    for (var i = 0; i < storedData.length; i++) {
      setVariables(storedData[i].day);
      activity.innerHTML = storedData[i].activity;
      brew.innerHTML = storedData[i].brew
    }
  }
}

loadActivites();
searchBtn.addEventListener("click", getBrews);
calendarDiv.addEventListener("click", divHandler);