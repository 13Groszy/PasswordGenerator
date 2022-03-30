let numbers = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*";

const returnedPassword = document.querySelector('.returnedPassword');

createPassword = () =>{

    
    const form = document.querySelector('#inputForm');
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    const passwordLength = document.querySelector('select').value;

    const formResults = [...searchParams.entries()].reduce(
        (result, [key, value]) => ({
          ...result,
          [key]: value,
        }), {}
      );

    let base = [];

    base = [
        formResults.numbers ? base + numbers : '',
        formResults.lowercase ? base + lowercase : '',
        formResults.uppercase ? base + uppercase : '',
        formResults.symbols ? base + symbols : ''
    ]
    const filledBase = base[0]+base[1]+base[2]+base[3];
    // I may come back to that and try base.push()

    const password = new Array(parseInt(passwordLength))
        .fill(null)
        .map(() => filledBase[Math.floor(Math.random() * filledBase.length)])
        .join('')
        console.log(password)
    returnedPassword.innerHTML = `Your password: ${password}`

    password == [null] ? (returnedPassword.innerHTML = `Select at least one option please`) : ''
}

