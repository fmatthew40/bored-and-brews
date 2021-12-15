

var calendarDiv = document.querySelector("#calendar");
var modal = document.getElementById("modal");
var errorModal =document.getElementById("error-modal");
var activitiesRadio = document.getElementsByName("activity")
var activityList = document.getElementById("activities");
var activityAlert = document.getElementsByClassName("act-alert")[0];
var loadingAlert = document.getElementsByClassName("loading")[0];
var cityInput = document.getElementById("city");
var breweryList = document.getElementById("breweries");
var searchBoredBtn = document.getElementById("search-bored");
var searchBrewsBtn = document.getElementById("search-brews");
var modalExit = document.getElementsByClassName("close")[0];
var errorModalExit = document.getElementsByClassName("close-error")[0];
var activityArray = [];
var day = "";
var activity = "";
var brew = "";
var clearData = {date: "", cleared: ""};
var today = new Date();
today.setDate(today.getDate());
var dateseven = new Date();
dateseven.setDate(dateseven.getDate() + 7);
var now = new Date();
 
// handler to call modal when a day is clicked
var divHandler = function (event) {
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
  activityList.textContent = "";
}

// When the user clicks on <span> (x), close the modal
modalExit.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal || event.target == errorModal) {
    modal.style.display = "none";
    errorModal.style.display = "none";
  }
}

var errorModalDisplay = function () {
  modal.style.display = 'none';
  errorModal.style.display = 'block';
}

errorModalExit.onclick = function() {
  errorModal.style.display = "none";
}

// When the user clicks the search button an api fetch call will occur to find breweries near the city they searched
var getBrews = function () {
  var city = cityInput.value.replace(/ /g, "_");

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
  .catch(function(error) {
    errorModalDisplay();
  })
}

// Function to display breweries in an ordered list under the city search input field 
var displayBreweries = function (breweries) {
  if (breweries.length === 0) {
    var noBreweries = document.createElement('h2');
    noBreweries.className = 'not-found';
    noBreweries.textContent = "City not found. Try a larger city near you!";
    breweryList.appendChild(noBreweries);
  }
  else {
    for (i = 0; i < breweries.length; i++) {
      var breweryName = document.createElement("li");
      breweryName.className = "brew";
      breweryName.id = "brew" + i;
      breweryName.textContent = breweries[i].name;
      breweryList.append(breweryName);
    }
  }
  
  // Call function to display brewery on calendar on click
  breweryList.addEventListener("click", displaySelectedBrewery);
}

// Function to display brewery on weekday on click
var displaySelectedBrewery = function (event) {

  var selectedListItem = event.target
  if (selectedListItem.matches(".brew")) {
    brew.innerHTML = selectedListItem.textContent;
    saveActivities();
  }
}

// save activities and breweries in local storage
var saveActivities = function() { 
  var arrayObj = {"day": day, "activity": activity.innerHTML, "brew":brew.innerHTML};
  activityArray.push(arrayObj);
  // save object to local storage array
  localStorage.setItem("activities", JSON.stringify(activityArray));
    
}


// load activities and breweries from local storage
var loadActivities = function () {
  activityArray = JSON.parse(localStorage.getItem("activities"));
  clearData = JSON.parse(localStorage.getItem("cleared"));
  if (!clearData) {
    clearData = {
      "date":  dateseven,
      "cleared": false
    }
    localStorage.setItem("cleared", JSON.stringify(clearData));
  }
  if (!activityArray || activityArray.length === 0) {
    activityArray = [];
    return;
  }
  else { 
    var savedDate = Date.parse(clearData.date);
    // reset cleared value if it's been a week since last cleared
    if (today >= savedDate && clearData.cleared) {
      clearData.cleared = false;
    }
    // if opened monday, clear previous week
    if (now.getDay() === 1  && !clearData.cleared) {
      clearDataSet();
    }
    // if program not opened on monday; check if it's been more than seven days from last clear, then clear
    else if (today >= savedDate && !clearData.cleared) {
      clearDataSet();    
    } 
    else {
      displaySavedActvities(activityArray);
    }
  }
}

function clearDataSet() {
  activityArray = [];
  localStorage.setItem("activities", JSON.stringify(activityArray));
  clearData = {date: dateseven, cleared: true};      
  localStorage.setItem("cleared", JSON.stringify(clearData));
  location.reload();
}

function displaySavedActvities(data) {
  for (var i = 0; i < data.length; i++) {
    setVariables(data[i].day);
    activity.innerHTML = data[i].activity;
    brew.innerHTML = data[i].brew
  }
}

// Function to get values from radio buttons
var getActivities = function () {

  for (i = 0; i < activitiesRadio.length; i++) {
    var radioValue = activitiesRadio[i];

    if (radioValue.checked) {
      radioActVal = radioValue.value;
      //hide buttons while api is fetching
      searchBoredBtn.style.display = "none";
      searchBrewsBtn.style.display = "none";
      //display loading alert
      loadingAlert.style.display = "block";
    } else if (!radioValue.checked) {
      //alert user to choose a category
      activityAlert.style.display = "block";
    }
  }
  getBoredApiData(radioActVal);

  activityList.addEventListener("click", chooseActivity);
}


var activityArr = [];
// Function to get activities from bored API
var getBoredApiData = function (radioActVal) {
  activityList.textContent = "";
  //remove alert after activities load
  activityAlert.style.display = "none"

  var boredUrl = "http://www.boredapi.com/api/activity?type=" + radioActVal

    fetch(boredUrl).then(function(response) {
      if(response.ok) {
        response.json().then(function (data){
          while (activityArr.length < 3) {
            if (activityArr.includes(data.activity)) {
              return getBoredApiData(radioActVal);
            }
            else {
              activityArr.push(data.activity);
              return getBoredApiData(radioActVal);
            }
          }
          displayActivities(activityArr);
        });
      }

    })
    .catch(function(error) {
      errorModalDisplay();
    });
}

// Function to display bored API activities in modal
var displayActivities = function (activityArr) {
  for (i = 0; i < activityArr.length; i++) {
    var activityItem = document.createElement("li");
    activityItem.textContent = activityArr[i];
    activityItem.className = "act-item"
    activityList.append(activityItem);
  }
  searchBoredBtn.style.display = "block";
  searchBrewsBtn.style.display = "block";
  loadingAlert.style.display = "none";

  activityList.addEventListener("click", chooseActivity);
}

// Function to display bored activities on weekday schedule
var chooseActivity = function (event) {
  var chosenAct = event.target
  if (chosenAct.matches(".act-item")) {
    var selectedAct = event.target.textContent;
    activity.innerHTML = selectedAct;
    saveActivities();
  }
  saveActivities();
}

searchBoredBtn.addEventListener("click", getActivities);

searchBrewsBtn.addEventListener("click", getBrews);

calendarDiv.addEventListener("click", divHandler);

loadActivities();

calendarDiv.addEventListener("click", divHandler);