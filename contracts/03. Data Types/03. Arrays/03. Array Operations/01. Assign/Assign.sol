// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract AssigningValues {
    string[5] data = ["Hi", "Hello", "Yo"];

    constructor() {
        data[3] = "Yo Yo"; // Assigns the value of the fourth element as "Yo Yo"
        console.log(data[3]);
    }
}
