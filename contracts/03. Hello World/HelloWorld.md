In solidity, we don’t have a in-built `console.log` but hardhat has made one. To use `console.log` in solidity, you would have to first import `hardhat/console.sol`, which gives us the superpowers to use `console.log` in solidity.

```solidity
// SPDX-License-Identifier: MIT

pragma solidity "^0.8.4"

import "hardhat/console.sol"
```

Let’s start writing the smart contract now

```solidity
// SPDX-License-Identifier: MIT

pragma solidity "^0.8.4"

import "hardhat/console.sol"

contract HelloWorld() {
	constructor() {
		console.log("Hello, World")
	}
}
```

Now it’s time to run this smart contract. We would have to deploy it to a local blockchain to run it. Head over to `scripts` directory and create a new file called `run.js`

```jsx
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

Let’s understand each the above code line by line

```jsx
const contractFactory = await hre.ethers.getContractFactory("HelloWorld");
```

This is compiling our smart contract and generates the necessary files under `artifacts` directory

```jsx
const contract = await contractFactory.deploy();
```

This would deploy our smart contract to the local block chain

```jsx
await contract.deployed();
```

Waits until then smart contract has been deployed on the local block chain

To run your smart contract which has been deployed on the local block chain, run the following command

```bash
npx hardhat run scripts/run.js
```

![https://imgur.com/XjP2Dlx.png](https://imgur.com/XjP2Dlx.png)

🥳 Congrats on completing your first ever smart contract!

## Feedback

Faced any kinds of issues during this section ? Head over to our [discord server](https://discord.gg/d2wSzvZ6nj) and ask it in the [#help](https://discord.com/channels/945288689876082709/945542160814604306) channel.

👀 Don't forgot to share your progress in [#share-your-progress](https://discord.com/channels/945288689876082709/945542086025936947) channel.

## Challenge

Create a new smart contract called `GmWagmi.sol` which would console log "gm wagmi!" and submit it by creating an new issue by using the [Submission]() issue template.
