// attaches current date to header element
var date = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").text(date);


var row = $(".row");
var hour = $(".hour");
hour.addClass("col-1");

var timeBlockEl = $(".textarea");
timeBlockEl.addClass("col");
var timeBlockText= document.querySelectorAll('.textarea');

var saveButton = $(".saveBtn");
saveButton.addClass("col-1");
saveButton.html('<img src="https://icons.iconarchive.com/icons/custom-icon-design/pretty-office-7/24/Save-as-icon.png"/>');



// function to stylize text blocks to represent if event was in the past, current or future
var time = function(){
    var currentTime = moment().format('HH');
    var timeBlockEl = $('.textarea');
    for (var i = 0; i < timeBlockEl.length; i++){
        var timeBlockID = timeBlockEl[i].id;
        var elementID = document.getElementById(timeBlockEl[i].id)
        
        if(timeBlockID < currentTime){
            $(elementID).addClass("past");
        }else if (timeBlockID > currentTime){
            $(elementID).addClass("future");
        }else{
            $(elementID).addClass("present");
        }
        // 8pm shows up as 20 with moment format of 'HH'
        // had to switch input id's to match military time
        console.log(currentTime);
    }
}
// will check the current time every minute
setInterval(time(), (1000 * 60) * 1);

// takes text input from each html row and adds it to an array for local storage
const addToDo = (e) => {
    var myToDoArray = [];

    var timeBlockText= document.querySelectorAll(
    ".row"
    );

    timeBlockText.forEach(function (element){
        myToDoArray.push({
            hour: element.id,
            text: element.querySelector(".textarea").value
        });
    });
    console.log(myToDoArray);
    localStorage.setItem("toDos", JSON.stringify(myToDoArray));
};


document.querySelectorAll(".saveBtn").forEach(function (btn){
    btn.addEventListener("click", addToDo);
});

// recalls local storage and prevents the input text from being erased after reloading or exiting the program
var savedRecall = JSON.parse(localStorage.getItem("toDos"));
if (savedRecall) {
    
    savedRecall.forEach(function (item){
        document
         .querySelector("#" + item.hour)
         .querySelector(".textarea").value = item.text;
    });
    
};






    


























