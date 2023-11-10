const num = document.getElementById("num")
const mes = document.getElementById("mes")

function myMes(){
    if (num.value == 0) {
        alert("You need a measure to do a measure, got it?")
    } else {
        const m = parseFloat(num.value)
            document.getElementById("n1").innerHTML = `(Km): ${m / 1000}km`
            document.getElementById("n2").innerHTML = `(Hm): ${m * 0.01}hm`
            document.getElementById("n3").innerHTML = `(Dam): ${m * 0.1}dam`
            document.getElementById("n4").innerHTML = `(Dm): ${m * 10}dm`
            document.getElementById("n5").innerHTML = `(Cm): ${m * 100}cm`
            document.getElementById("n6").innerHTML = `(Mm): ${m * 1000}mm`
            document.getElementById("n7").innerHTML = `(Feet): ${m * 3.28}feets`
    }
}