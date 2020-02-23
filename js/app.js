let ischeckedGood;
let ischeckedFast;
let ischekedCheap;
let stateGood;
let stateFast;
let stateCheap;
let statePrevious;

function flipSwitch() {
    console.log("state-start: " + statePrevious);
    if (statePrevious === "ab0") {
        let rand = Math.random();
        if (rand < 0.5) {
            document.getElementById('checkFast').checked = false;
        } else {
            document.getElementById('checkGood').checked = false;
        }
    } else if (statePrevious === "a0c") {
        let rand = Math.random();
        if (rand < 0.5) {
            document.getElementById('checkGood').checked = false;
        } else {
            document.getElementById('checkCheap').checked = false;
        }
    } else if (statePrevious === "0bc") {
        let rand = Math.random();
        if (rand < 0.5) {
            document.getElementById('checkCheap').checked = false;
        } else {
            document.getElementById('checkFast').checked = false;
        }
    }
    ischeckedGood = document.getElementById("checkGood").checked;
    ischeckedFast = document.getElementById("checkFast").checked;
    ischekedCheap = document.getElementById("checkCheap").checked;
    stateGood = (ischeckedGood) ? "a" : 0;
    stateFast = (ischeckedFast) ? "b" : 0;
    stateCheap = (ischekedCheap) ? "c" : 0;
    statePrevious = stateGood + stateFast + stateCheap;
    console.log("state-end: " + statePrevious);
}