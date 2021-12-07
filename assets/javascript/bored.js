var clear = document.getElementById("clear")
clear.addEventListener("click", function(){
    location.reload();
});

var recreational = document.getElementById("recreational");

recreational.addEventListener('change', function() {
    if (recreational.checked) {
        fetch("http://www.boredapi.com/api/activity?type=recreational").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=cooking").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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
        fetch("http://www.boredapi.com/api/activity?type=education").then(function(response) {
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


   
       
            
  
