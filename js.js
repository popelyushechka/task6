btn.addEventListener("click",fnc);
function fnc(){
    console.log(a1.checked);
    console.log(a2.checked);
    console.log(a3.checked);
    console.log(a4.checked);
    console.log(a5.checked);
    if (a1.checked){
        alert("Правильно");
    } else {
        alert("Неправильно");
    }
}