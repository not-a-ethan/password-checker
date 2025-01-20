# Password Checker

This package will chekck passwords based off of criteria provided

## Setup
First you need to import the setup function.

```javascript
const {setup} = require("ethan-password-checker")
```

Secondly you need to call the setup function to setup the checker. This can be called as many times as you want, if you want to change the criteria.

```javascript
setup(minLength, maxLength, numOfSpecialChars, numOfNumbers);
```

All the aguments are numbers and all must be included.

The function will return an array with the following format.

```javascript
[true|false, "message"|null]
```

The first item will be if the setup was successful. The second item will be a message saying what failed (if anything).

## Checking passwords

Before you start checking passwords make sure you setup it up (see the section before this.). Once you did that you need to import the `validate` function.

```javascript
const {validate} = require("ethan-password-checker")
```

This function takes one aguments, a string, the password you want to check. Example:

```javascript
validate("myPassword123")
```

This function also returns an array with the following format:

```javascript
[true|false, "message"|null]
```

The format is identical to the `setup()` function.