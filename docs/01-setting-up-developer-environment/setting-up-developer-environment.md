# 💻 Setting up developer environment

Before working with Solidity, we would have to set up our development environment in such a way that we could local test them 🚀.

## 👀 Magical powers of Hardhat

We would be using a tool called [Hardhat](https://hardhat.org/). This would create a local Ethereum network and give us fake test ETH and fake test accounts to work with. Sounds interesting right? So what are you waiting for so let’s set up Hardhat 🚀.

- Create a new folder for the project
  ```bash
  mkdir my-project
  ```
- Navigate into that folder
  ```bash
  cd my-project
  ```
- Initializing the project

  ```bash
  npm init -y
  ```

  - If you get an error saying `bash: npm: command not found` then go ahead and install NodeJS from https://nodejs.org

- Installing Hardhat

  ```bash
   npx hardhat
  ```

  You would be presented with a prompt something like this

  ![](https://imgur.com/uiEFO9U.png)

  Let's choose the first option and press enter for the rest of the options

- We would have to install a few other dependencies as well

  ```bash
  npm install --save-dev chai ethereum-waffle @nomiclabs/hardhat-waffle ethers @nomiclabs/hardhat-ethers
  ```

  [`chai`](https://npmjs.com/package/chai) is a testing library.

  [`ethereum-waffle`](https://npmjs.com/package/ethereum-waffle) is the waffle package by which you can test your smart contracts.

  [`@nomiclabs/hardhat-waffle`](https://npmjs.com/package/@nomiclabs/hardhat-waffle) allows to test smart contracts using waffle and hardhat.

  [`ethers`](https://npmjs.com/package/ethers) is a library for complete Ethereum wallet implementation.

  [`@nomiclabs/hardhat-ethers`](https://npmjs.com/package/@nomiclabs/hardhat-ethers) is a hardhat plugin for ethers.

  You have successfully set up Hardhat 🥳.

## ❤ Feedback

Faced any kinds of issues during this section? Head over to our [Discord server](https://discord.gg/d2wSzvZ6nj) and ask it in the [#help](https://discord.com/channels/945288689876082709/945542160814604306) channel.

👀 Don't forget to share your progress in [#share-your-progress](https://discord.com/channels/945288689876082709/945542086025936947) channel.

## 💪 Challenge

Go ahead open the generated basic project in your favorite text editor or IDE and submit its screenshot by using our discord bot's `-submit` command.
