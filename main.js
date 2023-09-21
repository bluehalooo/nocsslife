var age = 0; //age up
var jobpay = 0; // job pay
var job = ""; //just let the user choose any job with a textbox. you can use alert() if ur lazy
var money = 0;
var AIDS = false; //at age up give a 1% chance of AIDS
var AIDSTIME = 0;
document.getElementById("agetrackerthing").innerHTML = "Age: "+age; //i permentantly borrowed varunans code

function popup(thing, reason) {
    //lol all of this is mostly just prep
    //here you use createelement() to create a div. you can just pull up an img.
    //possible messages: death, aids (so far)
}

function death(reason){ //reason isn't required. would be nice tho
    //what is this game
    popup(death)
}
function shityouhaveaids() {
    //shit you have aids
}
function agethefuckup() {
    age++;
    if (Math.random() < 0.01 * (age*2) {
        var AIDS = true; //1% of AIDS. Every age up adds 2%. this means that at age 50 you will always get AIDS tho, so add a cap
    }
    if (AIDS) {
        AIDSTIME++;
        if (Math.random() * AIDSTIME < 0.05) {
            death() //This function gives a 5% chance of dying, which goes up by 5% each time
        }
    }

}