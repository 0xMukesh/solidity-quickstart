# 👋 Hello, World!

## 🎉 Creating a Project

Get started by creating a new project, by using `npx hardhat` command.

![](https://imgur.com/MaXqkVq.png)

## 💻 Writing the Smart Contract

Go ahead and choose "Create a basic sample project" and press enter for the rest of the options.

After the project has been created, go ahead and clean all the default generated files given by Hardhat. Don't delete the folder, delete the files. Folder structure is really important while working with Hardhat.

Create a new file under the `contracts` folder named `HelloWorld.sol`. Let's adding `SPDX License Identifier`. It is a fancy comment, which tells the license of your code. It would be choosing [MIT](https://opensource.org/licenses/MIT) license.

```solidity
// SPDX-License-Identifier: MIT
```

Let's now mention the version of our solidity compiler. As we are using Hardhat, the version of solidity in `hardhat.config.js` file should be the same as we are mentioning in our smart contract. I have the version of solidity as `0.8.12` in `hardhat.config.js`, it might vary with the version of solidity in your `hardhat.config.js` file.

![](https://imgur.com/pqsSIXH.png)

We would mention your solidity version using `pragma` keyword.

```solidity
pragma solidity ^0.8.12;
```

In solidity, we don’t have an in-built console.log (Solidity used to have a [low-level interface to logs](https://docs.soliditylang.org/en/v0.4.21/contracts.html#low-level-interface-to-logs) 👀) but hardhat has made one. To use console.log in solidity, you would have to first import "[hardhat/console.sol](https://github.com/NomicFoundation/hardhat/blob/master/packages/hardhat-core/console.sol)", which gives us the superpowers to use console.log in solidity.

Let's import "[hardhat/console.sol](https://github.com/NomicFoundation/hardhat/blob/master/packages/hardhat-core/console.sol)" by using the import statement (👀 _python vibes_)

```solidity
import "hardhat/console.sol";
```

Let's create a new contract by using the `contract` keyword followed by the contract's name.

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract HelloWorld {

}
```

Let's finally add a `constructor` where we would add our console log.

If you have done a bit of OOP programming, then you might know about constructor as "a special method which gets invoked whenever an instance of a class is created". However, in solidity, the constructor is been invoked once the smart contract has been deployed.

So finally our "Hello, World!" smart contract would look something like this.

```solidity
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.12;

import "hardhat/console.sol";

contract HelloWorld {
    constructor() {
        console.log("Hello, World");
    }
}
```

## ⚙ Running the smart contract locally

So we have completed writing the smart contract, but how would be even test it ? 🤔

To locally run our smart contract we would use Hardhat 🚀. We would be creating a `run.js` script and use that to locally run our script

### 🏃‍♂️ Creating a run script

Go ahead a create a `run.js` file under the `scripts` folder and add the following code.

```js
const main = async () => {
  const contractFactory = await hre.ethers.getContractFactory("HelloWorld");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Contract deployed to:", contract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
```

👀 Let me now explain what does this code actually does.

We are first getting our contract by using it's name.

```js
const contractFactory = await hre.ethers.getContractFactory("HelloWorld");
```

Hardhat would then compile, generate the necessary files under the `artifacts` folder and deploy it on a local Ethereum blockchain, where we can run our smart contract. You can think the `artifacts` folder as a `build` folder for solidity.

So let's run this script and deploy our smart contract, so that we can seeing it running 🚀

To run the script, open you terminal (make sure you are in the correct directory) and run the following command:

```bash
npx hardhat run scripts/run.js
```

![](https://imgur.com/tUQ7d2B.png)

**TADA** 🎉! Congrats on writing and deploying your first ever smart contract

## ❤ Feedback

Faced any kinds of issues during this section? Head over to our [Discord server](https://discord.gg/d2wSzvZ6nj) and ask it in the [#help](https://discord.com/channels/945288689876082709/945542160814604306) channel.

👀 Don't forget to share your progress in [#share-your-progress](https://discord.com/channels/945288689876082709/945542086025936947) channel.

## 💪 Challenge

Create a smart contract which would console log `gm, wagmi` in the terminal. Take a screenshot of the output and submit it by using our discord bot's `-submit` command
