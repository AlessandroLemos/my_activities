function myDesc() {
    const name = document.getElementById("name")
    const ric = document.getElementById("ric")

        if (name.value == 0) {
            alert("Please insert your data correctly")
        } else {
            if (document.getElementById("inWom").checked) {
                ric.innerHTML = `${name.value}, you have won a 15% of discount in our products`
            } else if (document.getElementById("inMan").checked) {
                ric.innerHTML = `${name.value}, you have won a 5% of discount in our products`
            }
        }
}