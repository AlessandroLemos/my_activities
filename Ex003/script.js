let name = document.getElementById('namez')
let sal = document.getElementById('sal')


function inform(){
    
    if (name.value == 0 || sal.value == 0) {
        alert("Please, insert your name and salary (It does not need to be real tough. Remember, this is just a test)")
    } else {
        let n1 = name.value
        let vl = sal.value
        let h2 = document.getElementById('h2')
        let div = document.getElementById('sec__div')
        const para = document.createElement("p")
            para.innerHTML = ""
            h2.innerHTML = `Your name is ${n1}`   
            para.innerHTML = `And your salary is about ${vl}`
            document.getElementById('sec__div').appendChild(para)

            
    }
}