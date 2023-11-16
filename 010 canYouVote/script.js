let theYear = document.getElementById("year")
let res = document.getElementById("result")
const d = new Date()
let time = d.getFullYear()

function vote(){
    if (theYear.value == 0) {
        alert("Please, input the year of your birth correctly")
    } else {
        let y = Number(theYear.value)
        let can = - y + time
            /*if (can >= 18){
                res.innerHTML = `Your age is ${can}, you are QUALIFIED to vote`
            }*/
            
            if (can >= 18 && can < 60) {
                res.innerHTML = `Your age is ${can}, you are QUALIFIED to vote`;
            } else if (can < 18) {
                res.innerHTML = `Your age is ${can}, you are NOT QUALIFIED to vote`;
            } else if (can >= 60 && can < 89) {
                res.innerHTML = `Your age is ${can}, you are QUALIFIED to vote, however, it's totally optional for you!`;
            } else if (can > 89 && can < 122) {
                alert(`Your age of ${can} years old is too high, you have better things to do`);
                res.innerHTML = `You can vote, but why would you?`
            } else if (can <= 0 || can > 122) {
                alert("Please put a valid number of years");
            } else {
                alert("Error");
            }
        }
    }

