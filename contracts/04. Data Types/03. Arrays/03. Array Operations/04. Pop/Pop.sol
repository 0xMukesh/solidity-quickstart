// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract AddingElement {
    string[] data = ["Hi", "Hello", "Yo"];

    constructor() {
        data.pop(); // This would remove the last element from the array, which is "Yo"
    }
}
