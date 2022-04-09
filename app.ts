let numbers = "0123456789";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*";

const returnedPassword = document.querySelector('.returnedPassword');
const copyBtnWrapper = document.querySelector('.buttonsWrapper');
let copyBtn = document.createElement('button');
    copyBtn.setAttribute('onclick', 'copyPassword()');
    copyBtn.innerHTML = `Click to copy`
let passedVal = {};

let createPassword = () => {

    const form: any = document.querySelector('#inputForm');
    const formData: any = new FormData(form);
    const searchParams = new URLSearchParams(formData);
    const passwordLength = document.querySelector('select').value;

    const formResults: any = [...searchParams.entries()].reduce(
        (result, [key, value]) => ({
          ...result,
          [key]: value,
        }), {}
      );

    let base: any = [];

    base = [
        ...(formResults.numbers ? base + numbers : []),
        ...(formResults.lowercase ? base + lowercase : []),
        ...(formResults.uppercase ? base + uppercase : []),
        ...(formResults.symbols ? base + symbols : [])
    ]
    const password: any = new Array(parseInt(passwordLength))
        .fill(null)
        .map(() => base[Math.floor(Math.random() * base.length)])
        .join('')

    password == [null] ? (returnedPassword.innerHTML = `Select at least one option please`) : (returnedPassword.innerHTML = `Your password: ${password}`) && (copyBtnWrapper.appendChild(copyBtn))
    
    passedVal = password
    return passedVal
}



let copyPassword = () => {

  //This function may use other function which use navigator.clipboard to copy password to clipboard, but it's not supported by all browsers, so I use fallback straight away.
  
  // const copyToClipboard = passedVal => {
  //   (navigator && navigator.clipboard && navigator.clipboard.writeText) ? navigator.clipboard.writeText(passedVal) : console.log('Password not copied')
  // };

  const copyToClipboard = passedVal => {
    const el = document.createElement('textarea');
    el.value = passedVal;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  passedVal == [null] ? copyBtnWrapper.removeChild(copyBtn) : (copyToClipboard(passedVal), alert('You copied your password'));
}