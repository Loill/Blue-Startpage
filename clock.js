// Source: tutorialstonight.com/html5-digital-clock-with-javascript.php
// Get the current time and date
    var time = document.querySelector('.time');
    var dateTime = document.querySelector('.date');
    var dayTime = document.querySelector('.day');
function updateClock() {
  // Get the current time, day , month and year
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var day = now.getDay();
    var date = now.getDate();
    var month = now.getMonth();
    var year = now.getFullYear();

  // store day and month name in an array
    var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // format date and time
    minutes = minutes < 10 ? '0' + minutes : minutes;
    date = date < 10 ? '0' + date : date;
    month = month < 10 ? '0' + month : month;

    // display date and time
    time.innerHTML = hours + ':' + minutes;
    dayTime.innerHTML = dayNames[day];
    dateTime.innerHTML = date + '.' + month + '.' + year;
}

updateClock();
setInterval(updateClock, 1000);
