let year = document.getElementById("ano")
const p = new Date();
let time = p.getFullYear();
       

function calcAge(){
    if (year.value == 0){
        alert("Please insert a year");
    } else {
        document.getElementById("show").innerHTML = ''
        let myYear = Number(year.value);
        let result = - myYear + time;
            if (myYear <= time) {
                document.getElementById("show").innerHTML = `You are ${result} years old`
            } else {
                alert("You have not even been born yet! Are you a time traveler?")
            }
    }
}