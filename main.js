var age = 0;
var jobpay = 0;
var money = 0;
var AIDS = false; //at age up give a 1% chance of AIDS
var AIDSTIME = 0;
document.getElementById("agetrackerthing").innerHTML = "Age: "+age; //i permentantly borrowed varunans code
function death(){
    //what is this game
}
function shityouhaveaids() {
    //shit you have aids
}
function agethefuckup() {
    age++;
    if (Math.random() < 0.1) {
        var AIDS = true;
    }
    if (AIDS) {
        AIDSTIME++;
        if (Math.random() * AIDSTIME < 0.05) {
            death()
        }
    }

}