// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract DeclaringArray {
    string[] dynamicArray = ["Hi", "Hello"];
    string[2] fixedArray = ["Hi", "Hello"];

    constructor() {
        console.log("Tada you have created a fixed and dynamic array");
    }
}
