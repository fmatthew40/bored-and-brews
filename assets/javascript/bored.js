// clears choices to start over
var clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    location.reload();
});


var participantInput = document.getElementById("participant-number");
var partSubmit = document.getElementById("part-submit");
var amount = document.getElementById("choice").value;

// Number of Participants
choice.addEventListener('change', function() {
console.log("changed");

});

var recreational = document.getElementById("recreational");

recreational.addEventListener('change', function() {
    if (recreational.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=recreational&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var charity = document.getElementById("charity");

charity.addEventListener('change', function() {
    if (charity.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=charity&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var cooking = document.getElementById("cooking");

cooking.addEventListener('change', function() {
    if (cooking.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=cooking&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var education = document.getElementById("education");

education.addEventListener('change', function() {
    if (education.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=education&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var music = document.getElementById("music");

music.addEventListener('change', function() {
    if (music.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=music&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var relaxation = document.getElementById("relaxation");

relaxation.addEventListener('change', function() {
    if (relaxation.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=relaxation&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var diy = document.getElementById("diy");

diy.addEventListener('change', function() {
    if (diy.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=diy&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var social = document.getElementById("social");

social.addEventListener('change', function() {
    if (social.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=social&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});

var busywork = document.getElementById("busywork");

busywork.addEventListener('change', function() {
    if (busywork.checked) {
        fetch("https://www.boredapi.com/api/activity/?type=busywork&?participants="+amount+"&?minprice=0&maxprice=1").then(function(response) {
            if (response.ok)  {
                response.json().then(function(data) {
                    console.log(data);
                    var returnedActivities = document.getElementById("returned-activities");
                    var li = document.createElement("li");
                    returnedActivities.appendChild(li);
                    var recreationalActivity = data['activity'];
                    li.innerText = recreationalActivity;
                });
            }
        });
    }
});
