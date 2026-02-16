// const lengthInput = document.getElementById("input-length")
// const lengthForm = document.getElementById("length-form")
// const output = document.getElementById("output")

// lengthForm.addEventListener("submit", (event) => {
//     event.preventDefault()
    
//     let kaomojis = {
//         6: ['(>_<")', "(-_-;)", '(>_<")', "(o_o')",],
//         7: ["d(-_-)b", "(=^.^=)", "<(._.)>", "(*^_^*)", ],
//         8: ["(*^.^*)/", "(-_-)zzz", "(=^..^=)"],
//         9: ["c( O.O )ɔ", "<( ^.^ )>", "t( -_- t)"],
//         10: ["(-_-) ....", ],
//                 }

//     password_length = lengthInput.value
//     var password = []
//     const usable_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]/.,><?~`'

//     const getInt = (min, max) => {
//         min = Math.ceil(min);
//         max = Math.floor(max)
//         return Math.floor(Math.random() * (max - min + 1)) + min;
//     }


//     for (let i = 0; i <password_length; i++) {
//         password.push(usable_characters[getInt(0, usable_characters.length - 1)]);
//     }

//     var combined = password.join("")
//     output.textContent = combined
// });

// // output.textContent = "Please enter a length and click the button to generate a password."

// // var usable_characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+={}[]/.,><?~`'
// // var password = []

// // const getInt = (min, max) => {
// //     min = Math.ceil(min);
// //     max = Math.floor(max)
// //     return Math.floor(Math.random() * (max - min + 1)) + min;
// // }

// // for (let i = 0; i < 12; i++) {
// //     password.push(usable_characters[getInt(0, usable_characters.length - 1)])
// // };

// // var combined = password.join("")
// // console.log(combined)


const lenInput = document.getElementById("input-length");
const lenForm = document.getElementById("length-form");
const output = document.getElementById("output");

const randomI = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

lenForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const kaomojimap = {
        6: ['(>_<")', "(-_-;)", '(>_<")', "(o_o')",],
        7: ["d(-_-)b", "(=^.^=)", "<(._.)>", "(*^_^*)",],
        8: ["(*^.^*)/", "(-_-)zzz", "(=^..^=)"],
        9: ["c( O.O )ɔ", "<( ^.^ )>", "t( -_- t)"],
        10: ["(-_-) ....",],
    };

    let targetLen = parseInt(lenInput.value);
    const valid = Object.keys(kaomojimap).map(Number);
    
   
    
    let possible = [];

    function find(remaining, current) {
        if (remaining === 0) {
            possible.push(current);
            return;
        }
     
        if (remaining < 0) return;

    
        for (let len of valid) {
            
            if (len <= remaining) {
                find(remaining - len, [...current, len]);
            }
        }
    }

    find(targetLen, []);


    if (possible.length === 0) {
        output.textContent = "Cannot make this exact length.";
        return;
    }

    const chosen = possible[randomI(0, possible.length - 1)];

    
    let parts = chosen.map(len => {
        const list = kaomojimap[len];
        return list[randomI(0, list.length - 1)];
    });

    output.textContent = parts.join("");
});