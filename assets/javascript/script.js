var calendarDiv = document.querySelector("#calendar");
var modal = document.getElementById("modal");
var activitiesRadio = document.getElementsByName("activity")
var activityList = document.getElementById("activities");
var cityInput = document.getElementById("city");
var breweryList = document.getElementById("breweries");
var searchBoredBtn = document.getElementById("search-bored");
var searchBrewsBtn = document.getElementById("search-brews");
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

//time out function to set interval to clear calendar monday at midnight
setTimeout(() => {setInterval((today) => {
  var today = now.getDay();
   if (today === 1) {
    activityArray = [];
    localStorage.setItem("activities", JSON.stringify(activityArray));
    loadActivities();
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
    activityList.textContent = "";
}

// When the user clicks on <span> (x), close the modal
modalExit.onclick = function() {
  modal.style.display = "none";
  saveActivites();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    saveActivites();
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


calendarDiv.addEventListener("click", divHandler);










var activitySubmit = document.getElementById("activitySubmit");

activitySubmit.addEventListener("click", function(){
  console.log("button clicked");
  activityCooking();
  activityDiy();
  activityRec();
  activityCharity();
  activitySocial();
  activityRelax();
  activityEducation();
  activityMusic();
  activityWork();

});

var activityCooking= function() {
  if (whichActivity[0].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=cooking").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityDiy= function() {
  if (whichActivity[1].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=diy").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityRec= function() {
  if (whichActivity[2].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=recreational").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityCharity= function() {
  if (whichActivity[3].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=charity").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activitySocial= function() {
  if (whichActivity[4].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=social").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityRelax= function() {
  if (whichActivity[5].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=relaxation").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityEducation= function() {
  if (whichActivity[6].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=education").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityMusic= function() {
  if (whichActivity[7].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=music").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var activityWork= function() {
  if (whichActivity[8].checked !== false) {
  for(let i=1; i<=5; i++) {
    fetch("https://www.boredapi.com/api/activity/?type=busywork").then(function(response) {
    if (response.ok) {
      response.json().then(function(data) {
        console.log("finish with li")

        var returnedActivities = document.getElementById("returned-activities");
        var li = document.createElement("li");
        returnedActivities.appendChild(li);
        var activity = data['activity'];
        li.innerText = activity;

      });
    }
    });
  }
}
}

var whichActivity = document.getElementsByName("activity");
check;
var check = function() {
  var whichActivity = document.getElementsByName("activity");
  var act = whichActivity.length

  for (i=0;i<act;i++) {
    if (whichActivity[i].checked) {
      console.log("activity");
    }
  }
};
// Function to get activities from bored API

// Function to get values from radio buttons
var getActivities = function() {
  for(i = 0; i < activitiesRadio.length; i++) {
    var radioValue = activitiesRadio[i];

    if(radioValue.checked) {
      radioActVal = radioValue.value;
  }
  }
    getBoredApiData(radioActVal);

}

// Function to get activities from bored API
var getBoredApiData = function(radioActVal) {
  activityList.textContent = "";

  var boredUrl = "http://www.boredapi.com/api/activity?type=" + radioActVal

  var activityArr = []
  for(i = 0; i < 3; i++) {
    fetch(boredUrl).then(function(response) {
      if(response.ok) {
        response.json().then(function (data){
          activityArr.push(data.activity);
        })
      }
    })
  } 
  var actTime = setInterval (function() {
    if(activityArr.length === 3) {
      displayActivities(activityArr);
      clearInterval(actTime);
    }
  }, 1000);
}

// Function to display bored API activities in modal
var displayActivities = function (activityArr) {
  for(i = 0; i < activityArr.length; i++) {
    var activityItem = document.createElement("li");
    activityItem.textContent = activityArr[i];
    activityItem.className = "act-item"
    activityList.append(activityItem);
  }
  activityList.addEventListener("click", chooseActivity);

} 

// Function to display bored activities on weekday schedule
var chooseActivity = function(event) {
  var chosenAct = event.target
  if(chosenAct.matches(".act-item")) {
    var selectedAct = event.target.textContent;
    activity.innerHTML = selectedAct;
  }
}

searchBoredBtn.addEventListener("click", getActivities);

searchBrewsBtn.addEventListener("click", getBrews);

calendarDiv.addEventListener("click", divHandler);

loadActivities();

calendarDiv.addEventListener("click", divHandler);
