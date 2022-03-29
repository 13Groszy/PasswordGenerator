const value = document.getElementById('passwordLength');
const password = document.getElementById('returnedPassword');
const badPassword = document.getElementById('badPassword');
const selectOption = document.querySelector('select')
const number = document.querySelector("#numbers")
const lowCase = document.querySelector("#lowercase")
const uppCase = document.querySelector("#uppercase")
const symbol = document.querySelector("#symbols")

createPassword = () => {

    let base = "";
    let numbers = "0123456789";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*";

    if (number.checked === true) {
        base += numbers;
    }
    if (lowCase.checked === true) {
        base += lowercase;
    }
    if (uppCase.checked === true) {
        base += uppercase;
    }
    if (symbol.checked === true) {
        base += symbols;
    }

    // Switch work for one case selected, for mutiple doesn't - TO DO
    // switch (true) {
    //     case number.checked === true:
    //         base = base+numbers;
    //         console.log(base);
    //         break;
    //     case lowCase.checked === true:
    //         base = base+lowercase;
    //         console.log(base);
    //         break;
    //     case uppCase.checked === true:
    //         base = base+uppercase;
    //         console.log(base);
    //         break;
    //     case symbol.checked === true:
    //         base = base+symbols;
    //         console.log(base);
    //         break;
    //     default:
    //         console.log(base);
    //         break;
    // }

    let passwordLength = selectOption.value;
    let returnedPassword = "";

        if (base === "") {
            password.innerHTML = ' Select at least one option please'
        } else {
            for (let i = 0, charLength = base.length; i < passwordLength; i++) {
                returnedPassword += base.charAt(Math.floor(Math.random() * charLength))
            }
            return password.innerHTML = `Your password: ${returnedPassword}`
        }

}