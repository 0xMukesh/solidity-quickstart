// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract AssigningValues {
    string[5] data = ["hi", "hello", "yo"];

    constructor() {
        data[3] = "yo yo";
        console.log(data[3]);
    }
}
