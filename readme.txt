没有上传node_modules文件夹

https://docs.alchemy.com/docs/hello-world-smart-contract

-------------部署合约  在测试网部署合约
npm init
npm install --save-dev hardhat  //Hardhat是一个用于编译、部署、测试和调试以太坊软件的开发环境。它可以帮助开发人员在部署到实时链之前在本地构建智能合约和dApp。
npx hardhat  //创建一个空的hardhat.config.js

mkdir contracts  //存放合约
mkdir scripts   //存放脚本，用于部署和与合约交互

在contracts文件夹写合约


项目的根目录下创建一个.env文件，用于设置的Metamask私钥和HTTP Alchemy API URL
npm install dotenv --save  //读取.env文件

npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0" //安装Ethers.js

更新hardhat.config.js

编译合约
npx hardhat compile

编写部署脚本
scripts/ 文件夹并创建一个名为deploy.js

部署合约
npx hardhat run scripts/deploy.js --network goerli

得到合约地址:0x5474Ef8994EFb0Df982Bb8891A448694E02Bf793

---------------与合约交互---------
https://docs.alchemy.com/docs/interacting-with-a-smart-contract
更新.env文件，添加Alchemy API_KEY和部署智能合约的CONTRACT_ADDRESS

scripts/文件夹中，创建一个 interact.js
    加入合约abi;创建合约实例;读取init消息(部署时写入的);更新init消息
npx hardhat run scripts/interact.js --network goerli
-------------将合约ABI提交到Etherscan
https://docs.alchemy.com/docs/submitting-your-smart-contract-to-etherscan


------------将智能合约连接到前端项目，nft
https://docs.alchemy.com/docs/integrating-your-smart-contract-with-the-frontend
https://docs.alchemy.com/docs/nft-minter
