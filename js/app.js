let ischeckedGood;
let ischeckedFast;
let ischekedCheap;
let stateGood;
let stateFast;
let stateCheap;
let stateCurrent;

function check() {
    switch (stateCurrent) {
        case "ab0":
            document.getElementById('checkFast').checked = false;
            break;
        case "a0c":
            document.getElementById('checkGood').checked = false;
            break;
        case "0bc":
            document.getElementById('checkCheap').checked = false;
            break;
    }
    ischeckedGood = document.getElementById("checkGood").checked;
    ischeckedFast = document.getElementById("checkFast").checked;
    ischekedCheap = document.getElementById("checkCheap").checked;
    stateGood = (ischeckedGood) ? "a" : 0;
    stateFast = (ischeckedFast) ? "b" : 0;
    stateCheap = (ischekedCheap) ? "c" : 0;
    stateCurrent = stateGood + stateFast + stateCheap;
}