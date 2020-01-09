/* exported pushFunction */
/* exported popFunction */
/* eslint-env browser */

var cars = ["Mercedes", "Bentley", "Tesla", "Dacia"];
document.getElementById("array").innerHTML = cars;

function pushFunction() {
    'use strict';
    cars.push("Fiat");
    document.getElementById("array").innerHTML = cars;
}

function popFunction() {
    'use strict';
    cars.pop();
    document.getElementById("array").innerHTML = cars;
}