// interact.js

const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS;

//合约ABI文件
const contract = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");


// Provider 节点提供者，提供对区块链的读写访问权限
const alchemyProvider = new ethers.providers.AlchemyProvider(network="optimism-goerli", API_KEY);

// Signer 签署交易的以太坊帐户
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// Contract  部署在链上的特定合约
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);


//更新消息
async function main() {
  const message = await helloWorldContract.message();
  console.log("The message is: " + message); 

  console.log("Updating the message...");
  const tx = await helloWorldContract.update("this is the new message");
  await tx.wait();

  const newMessage = await helloWorldContract.message();
  console.log("The new message is: " + newMessage); 
}
main();

// async function main() {
//   const message = await helloWorldContract.message();
//   console.log("The message is: " + message);
// }
// main();