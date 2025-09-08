/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

Function Description

Complete the TimeConversion function with the following parameter(s):

string s: a time in 12 hour format
Returns

string: the time in 24 hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints

All input times are valid
*/

function timeConversion(s) {
    // Write your code here

    let amPm = s.replace(/[^a-zA-Z]/g, '');
    let time = s.replace(/[a-zA-Z]/g, '').split(':');
    
    if(amPm === 'AM')
    {
        if(time[0] !== '12') return time.join(':');
        time[0] = '00';
        return time.join(':')
    } else {
        if(time[0] === '12') return time.join(':');
        time[0] = parseInt(time[0]) + 12;
        return time.join(':');
    }
}

console.log(timeConversion('07:05:45PM'));