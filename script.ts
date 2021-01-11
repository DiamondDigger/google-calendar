
const date: Date = new Date();
let day: string = '';
let daySide: string = '';
const monthElem: HTMLElement|null = document.querySelector('.month')
const monthSideElem: HTMLElement|null = document.querySelector('.side-month')

console.log('monthElem:', monthElem)

const currentMonth: number = date.getMonth()
const currentDayNumber: number = new Date().getDate();
const firstDayInWeek: number = date.getDay();
const amountOfDaysInMonth: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const amountOfDaysInPrevMonth: number = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

const lastDayMonthWeekIndex: number = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
const nextDays = 7 - 1 - lastDayMonthWeekIndex;


console.log('currentMonth', currentMonth)
console.log('firstDayWeekCount', firstDayInWeek)
console.log('currentDayCount', currentDayNumber)
console.log('lastDayMonth', amountOfDaysInMonth)
console.log('lastDayPrevMonth', amountOfDaysInPrevMonth)
console.log('lastDayMonthWeekIndex', lastDayMonthWeekIndex)
console.log('nextDays', nextDays)

function setPrevDays(firstDayWeekCount: number,countOfDays: number):string {
    let day: string = ''
    for (let i = firstDayWeekCount; i > 0; i-- ) {
        day+=`<div class='prev-day'>${amountOfDaysInPrevMonth - i + 1}</div>` 
    } 
    return day
}
function setNextDays(nextDays: number):string {
    let day: string = ''
    for (let i = 1; i < nextDays; i++ ) {
        day+=`<div class='prev-day'>${i}</div>` 
    } 
    return day
}
setDaysInCalendar(firstDayInWeek, amountOfDaysInPrevMonth, amountOfDaysInMonth, 'day', monthElem, nextDays);
setDaysInCalendar(firstDayInWeek, amountOfDaysInPrevMonth, amountOfDaysInMonth, 'side-day', monthSideElem, nextDays);

function setDaysInCalendar(
    firstDayWeekCount:number,
    amountOfDaysInPrevMonth: number,
    amountOfDaysInMonth: number, 
    classOfHTMLElemToAdd: string, 
    HTMLElementToPutIn: HTMLElement | null, 
    nextDays: number): void {

    let day: string = ''

    for (let i = firstDayWeekCount; i > 0; i-- ) {
        day+=`<div class='prev-${classOfHTMLElemToAdd}'>${amountOfDaysInPrevMonth - i + 1}</div>` 
    } 
    for (let i = 1; i <= amountOfDaysInMonth; i++){
        if ( i === currentDayNumber) {
            day += `<div class='current-${classOfHTMLElemToAdd}'>${i}</div>`
        } else {
            day += `<div class='${classOfHTMLElemToAdd}'>${i}</div>`
        }
    }
    for (let i = 1; i <= nextDays; i++ ) {
        day+=`<div class='prev-${classOfHTMLElemToAdd}'>${i}</div>` 

        if (i === nextDays && HTMLElementToPutIn) {
            HTMLElementToPutIn.innerHTML = day;
        } else if (!HTMLElementToPutIn) {
            console.log('no html element to put in days')
        }
    } 
}