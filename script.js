const lengthInput = document.getElementById("input-length")
const lengthForm = document.getElementById("length-form")
const output = document.getElementById("output")

lengthForm.addEventListener("submit", (event) => {
    event.preventDefault()
    
    let kaomojis = {
        6: ['(>_<")', "(-_-;)"],
        7: [],
        8: [],
        9: [],
        10: [],
        11: [],
        12: [],
        13: [],
        14: [],
        15: [],
        16: [],
                }

    password_length = lengthInput.value
    var password = []
    const usable_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]/.,><?~`'

    const getInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    for (let i = 0; i <password_length; i++) {
        password.push(usable_characters[getInt(0, usable_characters.length - 1)]);
    }

    var combined = password.join("")
    output.textContent = combined
});

// output.textContent = "Please enter a length and click the button to generate a password."

// var usable_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]/.,><?~`'
// var password = []

// const getInt = (min, max) => {
//     min = Math.ceil(min);
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// for (let i = 0; i < 12; i++) {
//     password.push(usable_characters[getInt(0, usable_characters.length - 1)])
// };

// var combined = password.join("")
// console.log(combined)


