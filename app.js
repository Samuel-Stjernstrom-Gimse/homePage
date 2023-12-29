//search field and button
//this function makes sure that the page is loaded before running the function under
document.addEventListener("DOMContentLoaded", () => {
    let btn = document.getElementById("btn-1")

    btn.addEventListener("click", () => {
        let userInput = document.getElementById("google-src").value
        //makes whitespace into +
        userInput = userInput.replace(/\s+/g, "+");
        window.location.replace("https://www.google.com/search?q=" + userInput)
    })
})

//when user press enter the button is activated
let inputField = document.getElementById("google-src")
inputField.addEventListener( "keypress", event => {
    if (event.key === "Enter") {
        document.getElementById("btn-1").click()
    }
})







