
function miles_to_kilometers() {
    var miles = parseFloat(document.getElementById("to_convert").value);
    var km = miles / 0.6;
    document.getElementById("to_convert").value = km;
}


function kilometers_to_miles() {
    var km = parseFloat(document.getElementById("to_convert").value);
    var miles = km * 0.6;
    document.getElementById("to_convert").value = miles;
}

function meters_to_feet() {
    var meters = parseFloat(document.getElementById("to_convert").value);
    var feet = meters * 3.3;
    document.getElementById("to_convert").value = feet;
}

function feet_to_meters() {
    var feet = parseFloat(document.getElementById("to_convert").value);
    var meters = feet / 3.3;
    document.getElementById("to_convert").value = meters;
}

function centimeters_to_inches() {
    var cm = parseFloat(document.getElementById("to_convert").value);
    var inches = cm / 2.5;
    document.getElementById("to_convert").value = inches;
}

function inches_to_centimeters() {
    var inches = parseFloat(document.getElementById("to_convert").value);
    var cm = inches * 2.5;
    document.getElementById("to_convert").value = cm;
}

function seconds_to_minutes() {
    var seconds = parseFloat(document.getElementById("to_convert").value);
    var minutes = seconds / 60;
    document.getElementById("to_convert").value = minutes;
}

function minutes_to_seconds() {
    var minutes = parseFloat(document.getElementById("to_convert").value);
    var seconds = minutes * 60;
    document.getElementById("to_convert").value = seconds;
}

function minutes_to_hours() {
    var minutes = parseFloat(document.getElementById("to_convert").value);
    var hours = minutes / 60;
    document.getElementById("to_convert").value = hours;
}

function hours_to_minutes() {
    var hours = parseFloat(document.getElementById("to_convert").value);
    var minutes = hours * 60;
    document.getElementById("to_convert").value = minutes;
}

function hours_to_days() {
    var hours = parseFloat(document.getElementById("to_convert").value);
    var days = hours / 24;
    document.getElementById("to_convert").value = days;
}

function days_to_hours() {
    var days = parseFloat(document.getElementById("to_convert").value);
    var hours = days * 24;
    document.getElementById("to_convert").value = hours;
}

function days_to_weeks() {
    var days = parseFloat(document.getElementById("to_convert").value);
    var weeks = days / 7;
    document.getElementById("to_convert").value = weeks;
}

function weeks_to_days() {
    var weeks = parseFloat(document.getElementById("to_convert").value);
    var days = weeks * 7;
    document.getElementById("to_convert").value = days;
}

function weeks_to_years() {
    var weeks = parseFloat(document.getElementById("to_convert").value);
    var years = weeks / 52;
    document.getElementById("to_convert").value = years;
}

function years_to_weeks() {
    var years = parseFloat(document.getElementById("to_convert").value);
    var weeks = years * 52;
    document.getElementById("to_convert").value = weeks;
}