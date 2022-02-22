// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract ArrayLength {
    string[3] data = ["hi", "hello", "yo"];

    constructor() {
        console.log(data.length);
    }
}
