function sum(){
        let n1 = Number(document.getElementById('num1').value, 10);
        let n2 = Number(document.getElementById('num2').value, 10);
            if (n1 === 0 || n2 === 0){
            alert('Try again')
            } else {
        
            document.getElementById('comment').innerHTML = `The answer is ${(n1+n2)}`
}
    
}