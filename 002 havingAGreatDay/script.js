function wakeup() {
    let name = prompt("Who is going to enter today?", "Special one")
    let msg = document.getElementById('namesaid')
    let thehead = document.getElementById('greeting')
    const data = new Date()
    let hora = data.getHours()
    let min = data.getMinutes()
    let time = hora + ":" + min;
    msg.innerHTML = `Right now, the time is ${time}`
    
    if (hora >= 0 && hora < 12) {
        thehead.innerHTML = `Good Morning ${name}`
            document.body.style.background = '#D6B79B'
    } if (hora >= 12 && hora < 18) {
        thehead.innerHTML = `Good Afternoon ${name}`
            document.body.style.background = '#FB7E00'
    } else {
        thehead.innerHTML = `Good Evening ${name}`
            document.body.style.background ='#0454B3'
    }
}