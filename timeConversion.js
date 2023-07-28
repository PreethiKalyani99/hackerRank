/* Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

function timeConversion(inputTime){
    let time = inputTime.slice(0, -2);
    let str = inputTime.slice(-2)
    let [hours, minutes, seconds] = time.split(':');

    hours = Number(hours);

    if (str.toUpperCase() === 'AM' && hours === 12) {
        hours = 0;
    } else if (str.toUpperCase() === 'PM' && hours !== 12) {
        hours += 12;
    }
    
    hours = hours.toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}
console.log(timeConversion('12:05:45am'));