//NOTE: Single quotes for JavaScript
const calendarDisplay = document.getElementById('calendar');
const monthLabel = document.getElementById('month-year');
let currentDate = new Date();
let viewedDate = new Date();
//current date is for highlighting and default purposes, vieweddate is for switching.
//calendar time
async function displayCalendar(date) {
    calendarDisplay.innerHTML='';
    const year = date.getFullYear();
    const month = date.getMonth();
    //this is setting the year and month to be rendered to the date's year and month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date (year, month+1, 0);
    const startDay = firstDay.getDay();
    //this is getting the first and last days so i know where to start and end the calendar
    monthLabel.textContent = `${firstDay.toLocaleString('default',{month:'long'})} ${year}`;
    //this basically just sets the title to the current month and year
    for (let i=0; i<startDay;i++) {
        const fillerCell = document.createElement('div');
        calendarDisplay.appendChild(fillerCell);
        //this bit is putting the blank tiles so that the weeks are right
    }
    for (let day = 1; day<=lastDay.getDate(); day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        //basically creating the ells
        const dayNumber = document.createElement('div');
        dayNumber.classList.add('day-number');
        dayNumber.textContent=day;
        //creating the day numbers
        dayCell.appendChild(dayNumber);
        calendarDisplay.appendChild(dayCell);
        //TODO: sync events from database.
        //This will need a way to compare events and get them
        //plus a limit on the events that can be shown
        //ALSO: if possible, highlight the current date with a special color.
    }
}   
//this bit does buttons
document.getElementById('prev-month').addEventListener('click',function (){
    viewedDate.setMonth(viewedDate.getMonth()-1);
    displayCalendar(viewedDate);
});
document.getElementById('next-month').addEventListener('click', function(){
    viewedDate.setMonth(viewedDate.getMonth()+ 1);
    displayCalendar(viewedDate);
});
displayCalendar(viewedDate);