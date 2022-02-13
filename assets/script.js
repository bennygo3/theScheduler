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




// saves to do text to local storage
// function saveText(){
//     var timeBlockEl = $(".textarea");
//     localStorage.setItem("textSaved", JSON.stringify(timeBlockEl));
//     console.log(timeBlockEl);
// }
var myToDo = [];
var timeBlockText= document.querySelectorAll('.textarea');
var myToDoArray = [];

function renderSaved(){
    $(".saveBtn").on("click", function(event){
    event.preventDefault();
    // var myToDoArray = [];
    var btnSaved= $(this).siblings(".textarea");
    // var btnVal = myToDo;
    console.log(btnSaved.val());

    $(".textarea").each(function(){
        myToDoArray.push($(this).val());
    })

    console.log(myToDoArray);
    
    localStorage.setItem('myToDo', JSON.stringify(myToDoArray));
 });
 
}





function init() {
    var cachedToDos = JSON.parse(localStorage.getItem("myToDo"));
    
    if (cachedToDos !== null){
        myToDoArray = cachedToDos;
    }
    renderSaved();
}

init();

// $(".saveBtn").on("click", function(event){
//     event.preventDefault();
//     saveText();
// });



// var textArray = [];

// localStorage.setItem('myToDo', JSON.stringify(timeBlockEl.value));
// var textRecall = JSON.parse(localStorage.getItem('myToDo'));

// e.preventDefault();

// textArray.push(timeBlockEl.value);
// localStorage.setItem('myToDo', JSON.stringify(textArray));























