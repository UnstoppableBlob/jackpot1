const lenInput = document.getElementById("input-length");
const lenForm = document.getElementById("length-form");
const output = document.getElementById("output");

const randomI = (min, max) => {
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
    
    const valid = [6, 7, 8, 9, 10];
    


    let current = [];
    let remaining = targetLen;


    while (remaining > 0) {
        

        const shuffled = valid.sort(() => 0.5 - Math.random());
        
        // let foundMove = false;

        for (let len of shuffled) {
            let attempt = remaining - len;


            if (attempt === 0 || (attempt >= 6 && attempt !== 11)) {
                current.push(len);
                remaining = attempt;
                // foundMove = true;
                break; 
            }
        }

    //     if (!foundMove) {
    //         output.textContent = "Error: Could not find a valid combination."
    //         return;
    //     }
    // }

    }
    let password = current.map(len => {
        const list = kaomojimap[len]
        return list[randomI(0, list.length - 1)];
    }).join("")

    output.textContent = password;
});