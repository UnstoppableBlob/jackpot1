var password_length = prompt('how long should the password be?')
const usable_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]/.,><?~`'
var password = []

const getInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (i = 0; i < password_length; i++) {
    password.push(usable_characters[getInt(0, usable_characters.length - 1)])
};

var combined = password.join("")
console.log(combined)