let n1 = document.getElementById("num")
const val = document.getElementById("result")

function press(){
    if (n1.value == 0) {
        alert("Please, put a number")
    } else {
        let numb = Number(n1.value)
        let res = numb - 1

        val.innerHTML = ''
        val.innerHTML = `The number before ${numb} is: ${res}`
    }
}