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


// handler to call modal when a day is clicked
var divHandler = function(event) {
    day = event.target;
    if (day.matches(".day>*, .day")) {
        day = day.closest("article").getAttribute("id");
        modalInputFunction(day);
    }
}


var modalInputFunction = function (day) {
    modal.style.display = "block";
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
  console.log(city);

  var replaceSpaceCity = city.replace(/ /g,"_");
  city = replaceSpaceCity;
  console.log(city);

  var breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&per_page=5"
  console.log(breweryUrl);

  fetch(breweryUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
          console.log(data);

          // Clear prior searches
          breweryList.textContent = "";

          // Call function to display breweries in modal
          displayBreweries(data);
        })
      }
    })
}

// Function to display five breweries in an ordered list under the city search input field 
var displayBreweries = function(breweries) {

  for(i = 0; i < breweries.length; i++) {
    var breweryName = document.createElement("li");
    breweryName.className = "brew" + i
    breweryName.textContent = breweries[i].name;
    breweryList.append(breweryName);
  }
  // var breweryList = document.getElementById("breweries");
  // var brewery1 = document.createElement("li");
  // var brewery2 = document.createElement("li");
  // var brewery3 = document.createElement("li");
  // var brewery4 = document.createElement("li");
  // var brewery5 = document.createElement("li");

  // brewery1.textContent = brew1;
  // brewery2.textContent = brew2;
  // brewery3.textContent = brew3;
  // brewery4.textContent = brew4;
  // brewery5.textContent = brew5;

  //breweryList.addEventListener("click", displaySelectedBrewery);
}

// var displaySelectedBrewery = function(event) {

//   if(event.target.matches())
//   var selectedBrewery = 
// }

searchBtn.addEventListener("click", getBrews);

calendarDiv.addEventListener("click", divHandler);