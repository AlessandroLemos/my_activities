let n1 = document.getElementById("num")

function press(){
    if (n1.value == 0) {
        alert("Please, put a number")
    } else {
        let numb = Number(n1.value)
        let res = numb - 1

        const para = document.createElement('h2')
        para.innerHTML = `The number before ${numb} is: ${res}`
        document.getElementById('first__div').appendChild(para)
    }
}