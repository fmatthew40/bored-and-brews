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

  var replaceSpaceCity = city.replace(/ /,"_");
  city = replaceSpaceCity;
  console.log(city);

  var breweryUrl = "https://api.openbrewerydb.org/breweries?by_city=" + city + "&per_page=5"
  console.log(breweryUrl);

  fetch(breweryUrl).then(function (response) {
    if (response.ok) {
        response.json().then(function (data) {
          console.log(data);
          // Get brewery Names
          var brew1 = data[0].name
          var brew2 = data[1].name
          var brew3 = data[2].name
          var brew4 = data[3].name
          var brew5 = data[4].name

          // Call function to display breweries in modal
          displayBreweries(brew1, brew2, brew3, brew4, brew5);
        })
      }
    })
}

var displayBreweries = function(brew1, brew2, brew3, brew4, brew5) {

  var brewery1 = document.getElementById("brew1");
  var brewery2 = document.getElementById("brew2");
  var brewery3 = document.getElementById("brew3");
  var brewery4 = document.getElementById("brew4");
  var brewery5 = document.getElementById("brew5");

  brewery1.textContent = brew1;
  brewery2.textContent = brew2;
  brewery3.textContent = brew3;
  brewery4.textContent = brew4;
  brewery5.textContent = brew5;
}

searchBtn.addEventListener("click", getBrews);

calendarDiv.addEventListener("click", divHandler);