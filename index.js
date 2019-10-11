"use strict";
exports.__esModule = true;
var hours = [
    'twelve',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
];
var estimates = [
    "o'clock",
    'five',
    'ten',
    'quarter',
    'twenty',
    'twentyfive',
    'half',
];
function roughTime() {
    var now = new Date();
    var hour = now.getHours() % 12;
    var minute = Math.round((now.getMinutes() % 30) / 5);
    return {
        date: now,
        hour: hours[hour === 12 ? 0 : hour],
        estimate: estimates[minute]
    };
}
exports["default"] = roughTime;
