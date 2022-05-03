
module.exports = getDate;

function getDate() {

    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-us", options);

}

module.exports.getDay = getDay;

function getDay() {

    var today = new Date();
    
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-us", options);

}

console.log(module.exports);