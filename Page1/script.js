// liked Movie
const heartIcn = document.querySelectorAll("#icn1");

heartIcn.forEach(function(heartIcn) {
    let isRed = false;
    heartIcn.onclick = function(event){
        isRed = !isRed;
        heartIcn.style.color = isRed ? "red" : "white";
    }
});
// added to watch list
const plusIcn = document.querySelectorAll("#icn2");

plusIcn.forEach(function(plusIcn) {
    let isRed = false;
    plusIcn.onclick = function(event){
        isRed = !isRed;
        plusIcn.style.color = isRed ? "red" : "white";
    }
});
