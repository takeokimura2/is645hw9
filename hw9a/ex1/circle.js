const circumference = circleRadius => `The circumference of a circle of radius ${circleRadius} is ${circleRadius * 2 * Math.PI}`;

const area = circleRadius => `Its area is ${Math.PI * Math.pow(circleRadius, 2)}`

module.exports.circumference = circumference;
module.exports.area = area;
