// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract AddingElement {
    string[] data = ["Hi", "Hello", "Yo"];

    constructor() {
        data.push("Yo Yo"); // This adds an element called "Yo Yo" at the end of the array
    }
}
