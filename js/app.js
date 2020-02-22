function check(){
    let ischeckedGood = document.getElementById("checkGood").checked;
    let ischeckedFast = document.getElementById("checkFast").checked;
    let ischekedCheap = document.getElementById("checkCheap").checked;
    if (ischeckedGood && ischeckedFast && ischekedCheap) {
        let currentState = Math.floor(Math.random() * 2) + 1 ;
        alert(currentState);
        switch (currentState) {
            case 1:
                document.getElementById("checkGood").checked = false;
                break;
            case 2:
                document.getElementById("checkFast").checked = false;
                break;
            case 3:
                document.getElementById("checkCheap").checked = false;
                break;
        }
    }
}
