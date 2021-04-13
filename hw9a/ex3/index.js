const moment = require("moment");

currentMoment = moment();
oldTime = moment([1976, 11, 26]);

difference = currentMoment.diff(oldTime, "years")

console.log(currentMoment.format("dddd, MMMM Do YYYY"));
console.log(`${difference} years ago`);