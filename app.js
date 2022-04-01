var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var numbers = "0123456789";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!@#$%^&*";
var returnedPassword = document.querySelector('.returnedPassword');
var createPassword = function () {
    var form = document.querySelector('#inputForm');
    var formData = new FormData(form);
    var searchParams = new URLSearchParams(formData);
    var passwordLength = document.querySelector('select').value;
    var formResults = __spreadArray([], searchParams.entries(), true).reduce(function (result, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, result), (_b = {}, _b[key] = value, _b)));
    }, {});
    var base = [];
    base = __spreadArray(__spreadArray(__spreadArray(__spreadArray([], (formResults.numbers ? base + numbers : []), true), (formResults.lowercase ? base + lowercase : []), true), (formResults.uppercase ? base + uppercase : []), true), (formResults.symbols ? base + symbols : []), true);
    var password = new Array(parseInt(passwordLength))
        .fill(null)
        .map(function () { return base[Math.floor(Math.random() * base.length)]; })
        .join('');
    password == [null] ? (returnedPassword.innerHTML = "Select at least one option please") : (returnedPassword.innerHTML = "Your password: ".concat(password));
};
