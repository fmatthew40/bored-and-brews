

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
                    li.innerText = "hi";


                });
            }
        });
    }
});



   
       
            
  
