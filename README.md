# JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: `TypeError: Cannot read properties of null (reading 'length')`.  The bug occurs when attempting to access the `length` property of a variable that is `null` or `undefined`. This often happens when dealing with arrays or strings that may not always be populated.

## Bug Description
The provided JavaScript code attempts to get the length of a variable `x` without first checking if `x` is `null` or `undefined`. This results in a runtime error if `x` is not an array or string.

## Solution
The solution involves adding a check to ensure `x` is an array or string before accessing the `length` property.  This prevents the error by handling null or undefined values gracefully.

## How to reproduce the bug
1. Clone this repository.
2. Run `bug.js`. You'll encounter the `TypeError`.

## How to run the solution
1. Clone this repository.
2. Run `bugSolution.js`.  This version handles the null case correctly.