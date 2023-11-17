const year = document.getElementById("year");
const d = new Date();
const now = d.getFullYear();
const res = document.getElementById("res")

function thisYear() {
    let today = document.getElementById("this year")
    today.innerHTML = ''
        if ((now % 4== 0) && (now % 100 != 0) || (now % 400 == 0)) {
            return today.innerHTML = `By the way, the year of <strong>${now}</strong> is a leap year`
        } else {
            return today.innerHTML = `By the way, the year of <strong>${now}</strong> is NOT a leap year`
        }
}

function leapYear() {
    if (year.value == 0) {
        alert("Please, insert a year")
    } else {
        let y = Number(year.value)
        if ((y % 4== 0) && (y % 100 != 0) || (y % 400 == 0)) {
            return res.innerHTML = `The year of ${y} is a leap year`
        } else {
            return res.innerHTML = `The year of ${y} is NOT a leap year`
        }
    }
}