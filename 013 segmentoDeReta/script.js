const val1 = document.getElementById("v1")
const val2 = document.getElementById("v2")
const val3 = document.getElementById("v3")
const res = document.getElementById("res")

function metrics() {
    if (val1.value == 0 || val2.value == 0 || val3.value == 0) {
        alert("Deve ser preenchido todos os valores")
    } else {
        let l1 = Number(val1.value)
        let l2 = Number(val2.value)
        let l3 = Number(val3.value)

        //Calculation of the semi-perimeter
        const s = (l1 + l2 + l3) / 2
        const areaValue = Math.sqrt(s * (s - l1) * (s - l2) * (s - l3))

        res.innerHTML = `A área do triangulo em questão é: ${parseInt(areaValue)}` 
    }
}