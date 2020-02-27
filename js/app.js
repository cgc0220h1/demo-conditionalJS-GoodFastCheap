function flipSwitch(id) {
    let isCheckedGood = document.getElementById('checkGood');
    let isCheckedFast = document.getElementById('checkFast');
    let isCheckedCheap = document.getElementById('checkCheap');
    switch (id) {
        case "checkGood":
            if (isCheckedFast.checked) {
                isCheckedCheap.checked = false;
            }
            break;
        case "checkFast":
            if (isCheckedCheap.checked) {
                isCheckedGood.checked = false;
                }
            break;
        case "checkCheap":
            if (isCheckedGood.checked) {
                isCheckedFast.checked = false;
            }
            break;
    }
}