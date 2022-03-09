// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract Integer {
    uint256 integerA = 12;
    uint256 integerB = 24;

    int256 integerC = -12;
    int256 integerD = -356;

    constructor() {
        // Mathematical Operators

        console.log("Addition: %d", integerA + integerB); // Addition
        console.log("Subtraction: %d", integerB - integerA); // Subtraction
        console.log("Multiplication: %d", integerA * integerB); // Multiplication
        console.log("Division: %d", integerA / integerB); // Division
        console.log("Exponential: %d", integerA**integerB); // Exponential
        console.log("Modulus: %d", integerA % integerB); // Modolu

        // Comparisons Operator

        console.log("Equality: %s", integerA == integerB); // Equality
        console.log("Not equal: %s", integerA != integerB); // Not equal
        console.log("Less than or equal to: %s", integerA <= integerB); // Less than or equal to
        console.log("Greater than or equal to: %s", integerA >= integerB); // Greater than or equal to
        console.log("Less than: %s", integerA < integerB); // Less than
        console.log("Greater than: %s", integerA > integerB); // Greater than

        // Conditional Operators

        console.log(true && true); // true
        console.log(true && false); // false

        console.log(true || false); // true
        console.log(false || false); // false
    }
}
