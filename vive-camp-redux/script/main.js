var redPoints = 0, 
orangePoints = 0, 
pinkPoints = 0, 
yellowPoints = 0, 
purplePoints = 0,
greenPoints = 0, 
blackPoints = 0, 
password = "password";

function addPoints() {
    var tribe = document.getElementById("tribe").value;
    var points = parseInt(document.getElementById("pointAmount").value);
    var passwordInput = document.getElementById("passwordInput").value;

    if (tribe === "Red" && passwordInput === password) {
        redPoints += points;
    } else if (tribe === "Orange" && passwordInput === password) {
        orangePoints += points;
    } else if (tribe === "Pink" && passwordInput === password) {
        pinkPoints += points;
    } else if (tribe === "Yellow" && passwordInput === password) {
        yellowPoints += points;
    } else if (tribe === "Purple" && passwordInput === password) {
        purplePoints += points;
    } else if (tribe === "Green" && passwordInput === password) {
        greenPoints += points;
    } else if (tribe === "Black" && passwordInput === password) {
        blackPoints += points;
    }

    if (passwordInput === password) {
        alert("The " + tribe + " tribe has received " + points + " points!");
    } else if (passwordInput !== password) {
        alert("Invalid password");
    }

    document.getElementById("redPoints").innerHTML = redPoints;
    document.getElementById("orangePoints").innerHTML = orangePoints;
    document.getElementById("pinkPoints").innerHTML = pinkPoints;
    document.getElementById("yellowPoints").innerHTML = yellowPoints;
    document.getElementById("purplePoints").innerHTML = purplePoints;
    document.getElementById("greenPoints").innerHTML = greenPoints;
    document.getElementById("blackPoints").innerHTML = blackPoints;

    document.getElementById("pointsForm").reset();
}

window.onload = function() {
    document.getElementById("redPoints").innerHTML = redPoints;
    document.getElementById("orangePoints").innerHTML = orangePoints;
    document.getElementById("pinkPoints").innerHTML = pinkPoints;
    document.getElementById("yellowPoints").innerHTML = yellowPoints;
    document.getElementById("purplePoints").innerHTML = purplePoints;
    document.getElementById("greenPoints").innerHTML = greenPoints;
    document.getElementById("blackPoints").innerHTML = blackPoints;
}