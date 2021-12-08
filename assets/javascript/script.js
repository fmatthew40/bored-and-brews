var calendarDiv = document.querySelector("#calendar");
var mondayDiv = document.querySelector("#monday");
var tuesdayDiv = document.querySelector("#tuesday");
var wednesdayDiv = document.querySelector("#wednesday");
var thursdayDiv = document.querySelector("#thursday");
var fridayDiv = document.querySelector("#friday");
var saturdayDiv = document.querySelector("#saturday");
var sundayDiv = document.querySelector("#sunday");
var modal = document.getElementById("modal");
var cityInput = document.getElementById("city");
var breweryList = document.getElementById("breweries");
var searchBtn = document.getElementById("search");
var modalExit = document.getElementsByClassName("close")[0];
var activityArray = [];


// handler to call modal when a day is clicked
var divHandler = function(event) {
    day = event.target;
    
    if (day.matches(".day>*, .day")) {
        day = day.closest("article").getAttribute("id");
        modalInputFunction();
    }
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
  var city = cityInput.value;

  var replaceSpaceCity = city.replace(/ /g,"_");
  city = replaceSpaceCity;

  var breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&per_page=5"

  fetch(breweryUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

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
    var findDaySpan = document.getElementsByClassName(day + "-brews")[0];
    findDaySpan.innerHTML = selectedListItem.textContent;
  }
}

// save activities and breweries in local storage
var saveActivites = function() {
  // for loop to go over each day dive and add span content
  var days = document.querySelectorAll(".day");
  console.log(days);
  for (var i = 0; i < days.length; i++) {
    var arrayDay = days[i].id;
    var arrayActivity = document.getElementsByClassName(arrayDay + "-activity")[0].innerText;
    var arrayBrew = document.getElementsByClassName(arrayDay + "-brews")[0].innerText;
    var arrayObj = {"day": arrayDay, "activity": arrayActivity, "brew":arrayBrew};
    activityArray.push(arrayObj);
  }
  localStorage.setItem("activities", JSON.stringify(activityArray));
}

searchBtn.addEventListener("click", getBrews);

calendarDiv.addEventListener("click", divHandler);