function wakeup() {
    prompt("Who is going to enter today?")
    let msg = document.getElementById('namesaid')
    let thehead = document.getElementById('greeting')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Right now is ${hora} hours`

    if (hora >= 0 && hora < 12) {
        thehead.innerHTML = `Good Morning ${prompt.value}`
    } if (hora >= 12 && hora < 18) {
        thehead.innerHTML = `Good Afternoon ${prompt.value}`
    } else {
        thehead.innerHTML = `Good Evening ${prompt.value}`
    }
}


