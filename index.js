const criteria = {
    init: false,
    "min-length": null,
    "max-length": null,
    "min-special": null,
    "min-num": null
}

function setup(minL, maxL, special, num) {
    if (minL < 0) {
        return [null, "Min length must be atleast 0"];
    }

    if (maxL < minL) {
        return [null, "Max length must be greater than min length"];
    }

    if (special < 0) {
        return [null, "Special charecters must be atleast 0"];
    }
    
    if (num < 0) {
        return [null, "Numbers charecters must be atleast 0"];
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
    let special = 0;

    for (let i = 0; i < password.length; i++) {
        if (Number(password.charAt(i)) !== Nan) {
            num++;
        } else if (/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(password)) {
            special++;
        }
    }

    if (num < criteria['min-num']) {
        return [false, "Not enough number"];
    }

    if (special < criteria['min-special']) {
        return [false, "Not enough special charecter"];
    }

    return [true, ""];
}

module.exports = {setup, validate};