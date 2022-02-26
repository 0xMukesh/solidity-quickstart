// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract ArrayLength {
    string[3] data = ["Hi", "Hello", "Yo"];

    constructor() {
        console.log(data.length); // This would console log the length of the data array
    }
}
