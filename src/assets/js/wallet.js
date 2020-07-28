function printResult() {
    alert("javascript loaded");
}

// Source code to interact with smart contract

//connection with local node
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/10966790c77d46d7ab30a093e84ea58c'));
//https://mainnet.infura.io/v3/10966790c77d46d7ab30a093e84ea58c
// contractAddress and abi are setted after contract deploy
var contractAddress = '0x26589e4e254d5cd2087e095553a15b54faf0efcb';
var tokenABI = JSON.parse( '[{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"cap","type":"uint256"},{"internalType":"uint256","name":"initialSupply","type":"uint256"},{"internalType":"bool","name":"transferEnabled","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[],"name":"MintFinished","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"MinterRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OperatorAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"}],"name":"OperatorRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"TransferEnabled","type":"event"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"addOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"approveAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"builtOn","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"cap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"enableTransfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"finishMinting","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isMinter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"mintingFinished","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"},{"internalType":"uint256","name":"tokenAmount","type":"uint256"}],"name":"recoverERC20","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"removeOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceMinter","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOperator","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"transferEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferFromAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFromAndCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]' );

//contract instance
contract = new web3.eth.Contract(tokenABI, contractAddress);

// Accounts
var account;



function getaccounts(){


  web3.eth.getAccounts(function(err, accounts) {
    account = accounts;
    console.log('Account: ' + account);
    web3.eth.defaultAccount = account;
  });

  var accountnum = account;

  for (var i = 0; i < accountnum.length; i++) {
    accountlist = "<li>" + accountnum[i] + "</li>";
    document.getElementById('accountinfo').innerHTML += accountlist;
    console.log(accountnum[i]);
  }
}



function getbalance() {
  web3.eth.getBalance("0xe44a3816766CBe21A441991a026C91678026cE8c", function(err, result) {
    if (err) {      
      document.getElementById('output').innerHTML += err;
    } else {
      var outputbal = web3.utils.fromWei(result, "ether") + " ETH";
      document.getElementById('output').innerHTML += outputbal;
    }
  })
}

function tokenbalance(){
  
  contract.methods.balanceOf('0xe44a3816766CBe21A441991a026C91678026cE8c').call().then(function (bal) {
      var finalbal = bal / 1000000000000000000;
      var baltostring = finalbal.toString();
        document.getElementById('tokenbal').innerHTML += baltostring + " MDNT <br>";
        document.getElementById('tokenbal1').innerHTML += baltostring + " MDNT <br>";
     })
}


function sendtokens(){
  let toAddress = "0x9c67A1513326696543F93ebc6fb341334456edB8";
  let fromAddress = "0xe44a3816766CBe21A441991a026C91678026cE8c";
  let decimals = web3.utils.toBN(18);
  let amount = web3.utils.toBN(100);
  
  let value = amount.mul(web3.utils.toBN(10).pow(decimals));

  contract.methods.transfer(toAddress, value).send({from: fromAddress}).on('transactionHash', function(hash){
    console.log(hash);
    document.getElementById('tokensenthash').innerHTML += hash;
  });
}

function sendether(){
  var fromaddr = document.getElementById("fromaddress").value;
  var toaddr = document.getElementById("toaddress").value;
  var ethamount = document.getElementById("ethamount").value;

  var handleReceipt = (error, receipt) => {
    if (error) console.error(error);
    else {
      console.log(receipt);
      res.json(receipt);
    }
  }
  
  web3.eth.sendTransaction({
   from: '0x247d24a94e228D2B0c55d36209EC12e521D831F7',
   to:'0xeC4ddeB4380Ad69B3E509BaAd9f158CDF4E4681d',
   value: web3.utils.toWei(ethamount.toString(), "ether")
  }, handleReceipt);

  // web3.eth.sendTransaction({
  //   from: fromaddr,
  //   to: toaddr, 
  //   value: web3.utils.toHex( web3.utils.toWei(ethamount.toString(), "ether")), 
 
  // }, function(err, transactionHash) {
  //     if (err) { 
  //         console.log(err); 
  //         document.getElementById('txhash').innerHTML += err;
  //     } else {
  //         console.log(transactionHash);
  //         document.getElementById('txhash').innerHTML += transactionHash;
  //     }
  // });


  // web3.eth.getAccounts(function(error, result) {
  //   web3.eth.sendTransaction(
  //       {
  //         from: "0x247d24a94e228D2B0c55d36209EC12e521D831F7",
  //         to: "0xeC4ddeB4380Ad69B3E509BaAd9f158CDF4E4681d",
  //         value:  "1000", 
  //         data: "0xdf"
  //       }, 
  //       function(err, transactionHash) {
  //         if (!err)
  //           console.log(transactionHash); 
  //   });
  // });
}

function createaccount() {
  // web3.eth.accounts.create( function(err, result) {
  //   if (err) {      
  //     document.getElementById('newaccount').innerHTML += err;
  //   } else {
  //     document.getElementById('newaccount').innerHTML += result;
  //   }
  // })
  // web3.eth.accounts.create(web3.utils.randomHex(32), function(err, result){
  //   if (err) {      
  //         document.getElementById('newaccount').innerHTML += err;
  //         console.log(err);
  //       } else {
  //         document.getElementById('newaccount').innerHTML += result;
  //         console.log(result);
  //       }
  // })

  let account = web3.eth.accounts.create(web3.utils.randomHex(32));
  let wallet = web3.eth.accounts.wallet.add(account);
  let keystore = wallet.encrypt(web3.utils.randomHex(32));
  var obj = {account: account,wallet: wallet,keystore: keystore};
  var acc = JSON.stringify(obj);
  console.log({account: account,wallet: wallet,keystore: keystore});
  document.getElementById('newaccount').innerHTML += acc;
}



//Smart contract functions
function registerSetInfo() {
  info = $("#newInfo").val();
  contract.methods.setInfo (info).send( {from: account}).then( function(tx) { 
    console.log("Transaction: ", tx); 
  });
  $("#newInfo").val('');
}

function registerGetInfo() {
  contract.methods.getInfo().call().then( function( info ) { 
    console.log("info: ", info);
    document.getElementById('lastInfo').innerHTML = info;
  });  
}















// web3.eth.getAccounts(function(err, accounts) {
//   if (err != null) {
//     alert("Error retrieving accounts.");
//     return;
//   }
//   if (accounts.length == 0) {
//     alert("No account found! Make sure the Ethereum client is configured properly.");
//     return;
//   }
//   account = accounts[0];
//   console.log('Account: ' + account);
//   web3.eth.defaultAccount = account;
// });