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
    var selectedBrewery = event.target.textContent;
    console.log(selectedBrewery);

    var findDaySpan = document.getElementsByClassName(day + "-brews");
    var span = findDaySpan[0];
    span.innerHTML = selectedBrewery;
  }
}

searchBtn.addEventListener("click", getBrews);

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

