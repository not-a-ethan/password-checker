const criteria = {
    init: false,
    "min-length": null,
    "max-length": null,
    "min-special": null,
    "min-num": null
}

function setup(minL, maxL, special, num) {
    if (minL < 0) {
        return [false, "Min length must be atleast 0"];
    }

    if (maxL < minL) {
        return [false, "Max length must be greater than min length"];
    }

    if (special < 0) {
        return [false, "Special charecters must be atleast 0"];
    }
    
    if (num < 0) {
        return [false, "Numbers charecters must be atleast 0"];
    }

    criteria.init = true;
    criteria['max-length'] = maxL;
    criteria['min-length'] = minL;
    criteria['min-special'] = special;
    criteria['min-num'] = num;

    return [true, null];
}

function validate(password) {
    if (!criteria.init) {
        return [false, "Create criateria first with the setup() function"]
    }

    if (password.length > criteria["max-length"]) {
        return [false, "Too long"];
    }

    if (password.length < criteria["min-length"]) {
        return [false, "To short"]
    }

    let num = 0;
    let special = password.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g);

    for (let i = 0; i < password.length; i++) {
        if (!isNaN(parseFloat(password.charAt(i)))) {
            num++;
        }
    }

    if (num < criteria['min-num']) {
        return [false, "Not enough numbers"];
    }

    if (special < criteria['min-special']) {
        return [false, "Not enough special charecter"];
    }

    return [true, null];
}

module.exports = {setup, validate};