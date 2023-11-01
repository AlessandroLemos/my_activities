let primeiraPr = document.getElementById('pr1')
let segundaPr = document.getElementById('pr2')
let result = document.getElementById('nota')

function media(){
    if (primeiraPr.value == 0 || segundaPr.value == 0) {
        alert("Não pode deixar os itens em branco")
    } else {
        result.innerHTML = ''
        let p1 = parseFloat(primeiraPr.value)
        let p2 = parseFloat(segundaPr.value)
        const ans = parseFloat(p1 + p2 / 2)
        
            if (ans < 0){
                alert("Não é possível ter uma nota negativa")
            } else {
                result.innerHTML = `A média entre ${p1} e ${p2} é <strong>${ans}</strong>!`
                if (ans > 10 && ans < 100) {
                    if (ans < 55){
                    var solut = document.createElement('h2')
                    solut.innerHTML = `A média de corte é de 55, portanto você <br>NÃO passou.`
                    document.getElementById("first__div").appendChild(solut)
                    }
                }
            }
            

    }
}