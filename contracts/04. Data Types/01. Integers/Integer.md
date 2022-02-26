# Integers in Solidity

In solidity, there are two types of integers unsigned integers (`uint`) and signed integers (`int`). Unsigned integers are non-negative integers whereas signed integers are negative integers.

> PS: `**` means to the "to the power of" aka `^` operator.

-   `uint8` ranges from 0 to 2 \*\* 8 - 1
-   `uint16` ranges from 0 to 2 \*\* 16 - 1
-   `uint256` or `uint` ranges from 0 to 2 \*\* 256 - 1
-   `int8` ranges from -2 ** 8 to 2 ** 8 - 1
-   `int16` ranges from -2 ** 16 to 2 ** 16 - 1
-   `int256` or `int256` ranges from -2 ** 256 to 2 ** 256 - 1

Let's create a new contract named `Integer.sol` under the `contracts` folder.

Let's get started by adding the SPDX License Identifier and mentioning solidity compiler's version

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;
```

Let's import Hardhat's `console.sol` file as well. By this we can use `console.log` in our smart contract.

```solidity
import "hardhat/console.sol";
```

Let's create a new contract named `Integer`.

```solidity
contract Integer {

}
```

Let's now add the unassigned and assigned integers over here.

```solidity
contract Integer {
    uint8 integerA = 12;
    uint256 integerB = 345;

    int8 integerC = -12;
    int256 integerD = -356;
}
```

Let's create a `constructor` where we add all our `console.log`'s

```solidity
contract Integer {
    uint8 integerA = 12;
    uint256 integerB = 345;

    int8 integerC = -12;
    int256 integerD = -356;

    constructor() {

    }
}
```

## Operators

### Mathematical Operators

| Operator | Description |
| -------- | ----------- |
| +        | Addition    |

You could basic mathematical operations such as addition, subtraction, multiplication, exponentiation, division in solidity.

```solidity
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
        console.log("Modulus: %d", integerA % integerB); // Modulo

    }
}
```

**PS**: If you try using the exponential operator on two different types (such as `uint8` and `uint256`) you would get a warning says that:

```
The result type of the exponentiation operation is equal to the type of the first operand (uint8) ignoring the (larger) type of the second operand (uint256) which might be unexpected. Silence this warning by either converting the first or the second operand to the type of the other.
```

To fix this, change both of the numbers to the same type, so in our case we should make either both `uint8` or `uint256`

Let's test it out by using the `npx hardhat run scripts/run.js`.

> **PS**: You could create a script in `package.json` file, if you feel `npx hardhat run scripts/run.js` is too long to type every single time. Go ahead and open the `package.json` file and add a `scripts` array under that you can define your command name and the command, in our case it's `npx hardhat run scripts/run.js`.
>
> So after making your changes the `package.json` should look something like this:
>
> ![](https://imgur.com/d70278x.png)
>
> I have choose `htrun` as the command name, you can any name which is comfortable for you.
>
> Now we can test it by using `npm <your-command-name>`, so in my case it would be `npm htrun`
