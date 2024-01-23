let n1 = document.getElementById('n1')
let n2 = document.getElementById('n2')
let res = document.getElementById('res')

function biggerThan() {
    if (n1.value == 0 || n2.value == 0) {
        alert('Try Again')
    } else {
        let fir = Number(n1.value)
        let sec = Number(n2.value)

        if (fir > sec) {
            res.innerHTML = `${fir} > ${sec}`
        } else if (fir < sec) {
            res.innerHTML = `${fir} < ${sec}`
        }
    }
}
