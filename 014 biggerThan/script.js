const F1 = document.getElementById("Fir")
const S2 = document.getElementById("Sec")
const res = document.getElementById("res")

function biggerThan() {
    if (F1.value == 0 || S2.value == 0) {
        alert("Sorry, you need two numbers to get it working")
    } else {
        let fir = Number(F1.value)
        let sec = Number(S2.value)

        if (fir > sec) {
            res.innerHTML = `${fir} > ${sec}`
        } else {
            res.innerHTML = `${fir} < ${sec}`
        }
    }
}