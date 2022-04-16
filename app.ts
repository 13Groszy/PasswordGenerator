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

    const form: HTMLFormElement = document.querySelector('#inputForm');
    // const formData: FormData = new FormData(form);
    const convertedFormEntries = Array.from(
      new FormData(form),
      ([key, value]) => (
        [key, typeof value === 'string' ? value : value.name]
      ),
    );
    const searchParams = new URLSearchParams(convertedFormEntries);
    const passwordLength = document.querySelector('select').value;

    const formResults: any = [...searchParams.entries()].reduce(
        (result, [key, value]) => ({
          ...result,
          [key]: value,
        }), {}
      );

    let base: String[] = [];

    base = [
        ...(formResults.numbers ? base + numbers : []),
        ...(formResults.lowercase ? base + lowercase : []),
        ...(formResults.uppercase ? base + uppercase : []),
        ...(formResults.symbols ? base + symbols : [])
    ]
    const password: String = new Array(parseInt(passwordLength))
        .fill(null)
        .map(() => base[Math.floor(Math.random() * base.length)])
        .join('')
    password == null ? (returnedPassword.innerHTML = `Select at least one option please`) : (returnedPassword.innerHTML = `Your password: ${password}`) && (copyBtnWrapper.appendChild(copyBtn))

    passedVal = password
    return passedVal
}


let snackBarFunction = () =>{
  let snackBar = document.querySelector(".snackBar");

  snackBar.setAttribute("style", "bottom: 0");
  //snackBar.style.bottom = "0";
  let delSnackBar = () =>{
  //  snackBar.style.bottom ="-100px"
    snackBar.setAttribute("style", "bottom: -100px");
  }
  const myTimeout = setTimeout(delSnackBar, 3000)
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

  passedVal == [null] ? copyBtnWrapper.removeChild(copyBtn) : (copyToClipboard(passedVal), snackBarFunction());
}
