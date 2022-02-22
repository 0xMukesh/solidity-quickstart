// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AddingElement {
    string[] data = ["hi", "hello", "yo"];

    constructor() {
        data.pop();
    }
}
