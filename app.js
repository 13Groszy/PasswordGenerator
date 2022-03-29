const value = document.getElementById('passwordLength');
const password = document.getElementById('returnedPassword')
const badPassword = document.getElementById('badPassword')

createPassword = () => {

    let base = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
    let passwordLength = value.value;
    let returnedPassword = "";

    if (passwordLength <= 5 || passwordLength >= 41) {
        badPassword.innerHTML = "Your password need to be between 6 to 40 characters"
        password.innerHTML = ""
    }else{
        badPassword.innerHTML = ""
        for (let i = 0, charLength = base.length; i < passwordLength; i++) {
            returnedPassword += base.charAt(Math.floor(Math.random() * charLength))
        }
        return password.innerHTML = `Your password: ${returnedPassword}`
    }

}

test = () =>{
    console.log()
}