/*
    This scripts helps link the contract to this frontend
*/
const contract_address = '0xea099b45B854c31101Db9B4E6ACF478ddf451281'
const _usdt = '0x6a5eB9a986F1a1F91913275243F47304082E758f'
const defaultRef = '0x7eB891FFcD7C2736f0DfBb04d126Ad923e2c9b83'
let usdtDec = 10 ** 6;
const admAbi = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdtAddr",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_defaultRefer",
				"type": "address"
			},
			{
				"internalType": "address[2]",
				"name": "_feeReceivers",
				"type": "address[2]"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Deposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "referral",
				"type": "address"
			}
		],
		"name": "Register",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "withdrawable",
				"type": "uint256"
			}
		],
		"name": "Withdraw",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "balStatus",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dayLuckUsers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dayLuckUsersDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "dayTopUsers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "defaultRefer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "deposit",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "depositors",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "distributePoolRewards",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "feeReceivers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCurDay",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_day",
				"type": "uint256"
			}
		],
		"name": "getDayLuckLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDepositorsLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getMaxFreezing",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getOrderLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getTeamDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_layer",
				"type": "uint256"
			}
		],
		"name": "getTeamUsersLength",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "isFreezeReward",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lastDistribute",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "level4Users",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "luckPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "orderInfos",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "unfreeze",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "isUnfreezed",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_referral",
				"type": "address"
			}
		],
		"name": "register",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "rewardInfo",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "capitals",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "statics",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "directs",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level4Freezed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level4Released",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level5Left",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level5Freezed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level5Released",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "star",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "luck",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "top",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "splitDebt",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "starPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "teamUsers",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "topPool",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalUser",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "usdt",
		"outputs": [
			{
				"internalType": "contract IERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userInfo",
		"outputs": [
			{
				"internalType": "address",
				"name": "referrer",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "start",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "level",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxDeposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDeposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamNum",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "maxDirectDeposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "teamTotalDeposit",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalFreezed",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalRevenue",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "userLayer1DayDeposit",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const token = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name_",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol_",
				"type": "string"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
const chainId = 80001
let walletAddress;let web3 = null;
let hooks = [] //to contain hook function

 // Unpkg imports
const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const EvmChains = window.EvmChains;
//const Fortmatic = window.Fortmatic;

// Web3modal instance
let web3Modal
// Chosen wallet provider given by the dialog window
let provider;

/**
 * Setup the orchestra
 */
function init() {

  console.log("Initializing example");
  console.log("WalletConnectProvider is", WalletConnectProvider);
  console.log("Fortmatic is", Fortmatic);

  // Tell Web3modal what providers we have available.
  // Built-in web browser provider (only one can exist as a time)
  // like MetaMask, Brave or Opera is added automatically by Web3modal
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: {
        // Mikko's test key - don't copy as your mileage may vary
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
      }
    },
/*
    fortmatic: {
      package: Fortmatic,
      options: {
        // Mikko's TESTNET api key
        key: "pk_test_391E26A3B43A3350"
      }
    }
    */
  };

  web3Modal = new Web3Modal({
    cacheProvider: false, // optional
    providerOptions, // required
  });

}


/**
 * Kick in the UI action after Web3modal dialog has chosen a provider
 */
async function fetchAccountData() {

  // Get a Web3 instance for the wallet
  web3 = new Web3(provider);

  console.log("Web3 instance is", web3);

  // Get connected chain id from Ethereum node
  const chainId = await web3.eth.getChainId();
  
  // Get list of accounts of the connected wallet
  const accounts = await web3.eth.getAccounts();

  // MetaMask does not give you all accounts, only the selected account
  console.log("Got accounts", accounts);
  walletAddress = accounts[0];
  runHook()
  }; 
/**
 * Connect wallet button pressed.
 */
async function onConnect() {

	init()
  console.log("Opening a dialog", web3Modal);
  try {
    provider = await web3Modal.connect();
  } catch(e) {
    console.log("Could not get a wallet connection", e);
    return;
  }

  // Subscribe to accounts change
  provider.on("accountsChanged", (accounts) => {
    fetchAccountData();
  });

  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    fetchAccountData();
  });

  // Subscribe to networkId change
  provider.on("networkChanged", (networkId) => {
    fetchAccountData();
  });

  await await fetchAccountData();
}
 

async function setProvider(webProvider){
    if(typeof(webProvider) == 'string'){
        web3 = new Web3(new Web3.providers.HttpProvider(webProvider)) 
        return Promise.resolve(true)
    }
    else{
        try{ 
            let res = await window.ethereum.request({method: 'eth_requestAccounts'})
            if(res){
                web3 = new Web3(webProvider)
                walletAddress = res[0] //setting wallet to web3 wallet
                //listens to account changed
                ethereum.on('accountsChanged', (acct =>{
					walletAddress = acct[0]
					runHook()
				}));
				runHook()
                return Promise.resolve(true)
            }
            else{
                Promise.reject(false)
            }
        }
        catch(e){return Promise.reject(false)}
    }
}
function connectWallet(){
    //to connect wallet
    if(window.ethereum){
        onConnect(window.ethereum)
        .then(res =>{
            if(res){
               E('cwallet').innerHTML =  (walletAddress + "").substring(0,10) + "..."
            }
        })
    }
    else{alert('This browser is not ethereum supported')}
}
function deposit(){
    //get deposit amount
    let  amount = E('recipient-name').value * 1
	if (amount >= 50 && amount <= 2000) {  
		amount = amount * usdtDec //convert to usdt equivalent
		console.log(Web3.utils.toWei(amount + "",'wei'))
        const adm = new web3.eth.Contract(admAbi, contract_address);
        adm.methods.deposit(Web3.utils.toWei(amount + "",'wei'))
        .send({from: walletAddress})
        .then(res => {console.log(res)
            hideTransact(res.message)
             //done successfully
             if(res.status){
				 alert('deposited successfully')
				 runHook()
             }
             else{alert('Unable to deposit')}
        })
        .catch(err => {console.log(err)
            hideTransact("")
            alert('Something went wrong')
        })  
        showTransact()
    }
    else{alert("Invalid amount")}
}
function withdraw(){
    //get deposit amount
    const adm = new web3.eth.Contract(admAbi, contract_address);
    adm.methods.withdraw()
    .send({from: walletAddress})
		.then(res => {
			hideTransact(res.message)
			//done successfully
			if (res.status) {
				alert('withdraw successfully')
				runHook()
			}
			else { alert('Unable to deposit') }
		})
        .catch(err => {
            hideTransact("")
            alert('Something went wrong')
        })  
        showTransact()    
}
//to do backgrounf check before deposit start
function startDeposit() {
	//disable button
	E('recipient-button').disabled = true
	//turn the color to grey
	E('recipient-button').style.background = 'grey'
	E('recipient-button').innerHTML = "..."
	//check if the adm contract has been given approval to spend your usdt
	isAllowed(function (bool) {
		//reset button
		E('recipient-button').disabled = false
		//turn the color to grey
		E('recipient-button').style.background = ''
		if (bool) {
			//has given approval,
			E('recipient-button').innerHTML = "Confirm"
		}
		else {
			//has not given approval,
			E('recipient-button').innerHTML = "Grant ADM permission to deposit your USDT"
			E('recipient-button').onclick = function () {
				showTransact()
				getAllowed(function (bool, res) {
					if (bool) {
						E('recipient-button').onclick = deposit
						E('recipient-button').innerHTML = "Confirm"
						hideTransact("")
					}
					else {
						hideTransact(res.message)
					}
				})
			}
		}
	})
}
function isAllowed(func){
	const tokenz = new web3.eth.Contract(token, _usdt);
	tokenz.methods.allowance(walletAddress, contract_address)
	.call().then(amt => {  
		if(amt <= 0){
			 func(false)
		}
		else{func(true)}
	})
	.catch(err => { 
		func(false)
	})
 
}
//to grant permission to stake _usdt
function getAllowed(func){
	const tokenz = new web3.eth.Contract(token, _usdt);
	tokenz.methods.approve(contract_address, Web3.utils.toWei('9000000000000000000'))
                .send({from: walletAddress})
                .then(res => {
                     //done successfully
                     if(res.status){func(true)}
                     else{func(false, res)}
                })
               .catch(err => {func(false, err)})
}
function showTransact(){
	E('loadingModal').style.display = 'flex'
	E('txmessage').innerHTML = ""
}
function hideTransact(msg){
	E('txmessage').innerHTML = msg
	setTimeout(function () {
		E('loadingModal').style.display = 'none'
	}, 4000)
}
//hooks
function addToHook(callback) {
	//to add to a hook
	hooks.push(callback)
}
function runHook() {
	//to run hook functions
	hooks.forEach((hook) =>{hook()})
}
function setLevel(_level) {
	E('actual_level').innerHTML = _level
	try {
		for (let i = 1; i <= 5; i++) {
			E('level_img_' + i).style.display = 'none'
		}
		E('level_img_' + _level).style.display = 'flex'
	}
	catch(e){}
}
function _copy(val) {
	navigator.clipboard.writeText(val);
	alert('Copied')
}
function _GET(_param){
    let res = "";let tmp = []
    let items = location.search.substr(1).split('&')
    for(let i = 0; i < items.length;i++){
        tmp = items[i].split("=")
        if(tmp[0] == _param) res = decodeURIComponent(tmp[1])
    }
    return res
}
function changeValue(){
    let tm = E('recipient-name').value * 1
    E('receipent_no').innerHTML = tm + 'USDT'
    E('receipent_bonus').innerHTML = ((0.105 * tm) + tm) + 'USDT'
    
}
(function () {
	 
   setTimeout(function(){
       //connect to wallet automatically
       connectWallet()
   }, 1000) 
   //set the contract address
   E('contract_address').innerHTML = contract_address  
   //utility functions that run with web3 connected hook
	const getStats = () => { 
		//get decimals of the usdt
		const tokenz = new web3.eth.Contract(token, _usdt);
		tokenz.methods.decimals()
		.call().then(tokenDec => { 
			usdtDec = 10 ** tokenDec * 1
				//return running time
				const adm = new web3.eth.Contract(admAbi, contract_address);
				adm.methods.getCurDay()
					.call().then(day => {  
					if(day < 1){day = day + ' Day'}else{day = day + 'Days'}
						E('running_time').innerHTML = day 
						//return lucky pool
					adm.methods.luckPool()
					.call().then(amt => {    
						E('lucky_pool').innerHTML = "$" + (amt / usdtDec).toFixed(7)
						//return top 5 pool
						adm.methods.topPool()
						.call().then(tamt => {   
							E('top_pool').innerHTML = "$" + (tamt / usdtDec).toFixed(7) 
							//return star pool
							adm.methods.starPool()
						.call().then(samt => {   
							E('star_pool').innerHTML = "$" + (samt / usdtDec).toFixed(7)  
							//get user info
							adm.methods.userInfo(walletAddress)
						.call().then(usr => {   
							setLevel(usr.level)
							E('referral_address').innerHTML = usr.referrer
							E('my_address').innerHTML =  walletAddress
							//show matic balance
							web3.eth.getBalance(walletAddress, function(err, result) {
								if (err) {
									console.log(err)
								} else {
									E('my_balance').innerHTML = ((web3.utils.fromWei(result, "ether") * 1).toFixed(5) + " MATIC")
								}
								//get usdt balance
								const tokenz = new web3.eth.Contract(token, _usdt);
								tokenz.methods.balanceOf(walletAddress)
									.call().then(bal => {
										tokenz.methods.decimals()
											.call().then(dec => { 
												E('usdt_balance').innerHTML = "$" + (bal/10**dec).toFixed(3)
												//get luckycontributors
												adm.methods.getDayLuckLength(day.replace(/[^0-9]/g,"") * 1)
													.call().then(len => { 
														//gotten the length of depositors,
														//latest depositors are the ones added recently
														if (len > 0) {
															//clear the view
															E('lucky_contributors').innerHTML = ""
															//get the last 10 depositor data
															for (let i = len - 1; i > (len - 10) && i > -1; i--){ 
																dispLuckyDeposit(day.replace(/[^0-9]/g,"") * 1, i)
															}
															//get top referral
															for (let i = 0; i < 4; i++){ 
																dispTopReferr(day.replace(/[^0-9]/g,"") * 1, i)
															}
														}
														//get total number of contributors
														adm.methods.totalUser()
															.call().then(amt => {
																E('contributors').innerHTML = amt
																//get deposit time
																E('my_deposit_time').innerHTML = ""
																adm.methods.getOrderLength(walletAddress)
																	.call().then(len => {
																		adm.methods.orderInfos(walletAddress, len - 1)
																			.call().then(val => { 
																				let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
																				E('my_deposit_time').innerHTML = (new Date(val.start * 1000)).toLocaleDateString("en-US", options)
																		        //get user referall link
                                                                                adm.methods.userInfo(walletAddress)
                                                                                .call().then(val => {    
                                                                                    if((val.totalDeposit * 1) > 0){ 
                                                                                        let pth = window.location.href 
                                                                                        if(pth.indexOf('?') > -1){
                                                                                             pth = pth.substring(0, pth.indexOf('?'))
                                                                                        }
                                                                                        E('referral_link').innerHTML = "<a href='" + pth + "?ref=" + walletAddress + "'>" + pth + "?ref=" + walletAddress + "</a>"
                                                                                    }

                                                                            }).catch(err => console.log(err))
                                                                        }).catch(err => console.log)
																	})
															})
													})
											}).catch(err => { console.log(err) })
									})
									.catch(err => {console.log(err)})
							})
						})
						})
					.catch(err => {console.log(err)})
						})
					.catch(err => {console.log(err)})
					})
					.catch(err => {console.log(err)})
			
				})
				.catch(err => {console.log(err)})
		})
		.catch(err => {console.log(err)})
		
	}
	const getDepositorStats = () => {
		//get the latest depositors
		const adm = new web3.eth.Contract(admAbi, contract_address);
		adm.methods.getDepositorsLength()
			.call().then(len => {
				//gotten the length of depositors,
				//latest depositors are the ones added recently
				if (len > 0) {
					//clear the view
				    E('latest_contributors').innerHTML = ""
					//get the last 10 depositor data
					for (let i = len - 1; i > (len - 10) && i > -1; i--){ 
						dispUserDeposit(i)
					}
				}
			})
		
	}
	const getRegistered = () => {
		//to check if user is registered
		const adm = new web3.eth.Contract(admAbi, contract_address);
		adm.methods.userInfo(walletAddress)
			.call().then(info => {
				//gotten the length of depositors,
				//latest depositors are the ones added recently
				if (info.referrer == "0x0000000000000000000000000000000000000000") {
					//not registered
					showTransact()
					E('txmessage').innerHTML = "Registering User Wallet"
                    //check if it opened from a referral link
                    let ref = _GET('ref')
                    if(ref == "") ref = defaultRef; //use yourself as referall
                    adm.methods.register(ref)
						.send({ from: walletAddress })
						.then(res => {
							console.log(res)
							hideTransact("Registered Successfully")
                            runHook()
						})
						.catch(err => {
							hideTransact(err.message || err)
					})
				}
			})
		.catch(err => console.log)
	}
	 
	function dispUserDeposit(_index) {
		//get the user from depositors
		const adm = new web3.eth.Contract(admAbi, contract_address);
		adm.methods.depositors(_index)
		.call().then(usrAddr => { 
				//gotten the user address,
				if (usrAddr != "") {
					//get the current deposited amount
					adm.methods.getOrderLength(usrAddr)
						.call().then(len => { 
							 //gotten the current depositor length
							if (len > 0) {
								adm.methods.orderInfos(usrAddr, len - 1)
									.call().then(val => { 
										E('latest_contributors').innerHTML += ' <li class="list-group-item d-flex justify-content-between"><span>'+ usrAddr.substring(0,10) + "..." + usrAddr.substring(usrAddr.length - 7) + '</span><span>...</span><span><img src="img/Group.png" class="img-fluid">$' + (val.amount / usdtDec)  + '</span></li>'
									})
							}
						})
				}
		})
		.catch(err =>{console.log(err)})
	}
	function dispLuckyDeposit(_day, _index) {
		//get the user from depositors
		const adm = new web3.eth.Contract(admAbi, contract_address);
		adm.methods.dayLuckUsers(_day, _index)
		.call().then(usrAddr => { 
				//gotten the user address,
				if (usrAddr != "") {
					//get the current deposited amount
					adm.methods.getOrderLength(usrAddr)
						.call().then(len => { 
							 //gotten the current depositor length
							if (len > 0) {
								adm.methods.orderInfos(usrAddr, len - 1)
									.call().then(val => { 
										E('lucky_contributors').innerHTML += ' <li class="list-group-item d-flex justify-content-between"><span>'+ usrAddr.substring(0,10) + "..." + usrAddr.substring(usrAddr.length - 7) + '</span><span>...</span><span><img src="img/Group.png" class="img-fluid">$' + (val.amount / usdtDec)  + '</span></li>'
									})
							}
						})
				}
		})
		.catch(err =>{console.log(err)})
	}
	function dispTopReferr(_day, _index) {
		//get the user from depositors
		const adm = new web3.eth.Contract(admAbi, contract_address);
		adm.methods.dayTopUsers(_day, _index)
		.call().then(usrAddr => { 
				//gotten the user address,
				if (usrAddr != "0x0000000000000000000000000000000000000000") { 
					//get the current deposited amount
					E('top_referral').innerHTML += '<li class="list-group-item d-flex justify-content-between" style="word-wrap:break-word"><span>'+ usrAddr.substring(0,10) + "..." + usrAddr.substring(usrAddr.length - 7) + '</span><span><i class="fa fa-long-arrow-right arrowup"></i></span></li>'
				}
		})
		.catch(err => { console.log(err) })
		E('top_referral').innerHTML = ""
	}
	
	addToHook(getRegistered)
	addToHook(getStats)
	addToHook(getDepositorStats)
	
})()

//settinng the deposit function
E('recipient-button').onclick =  deposit
E('withdraw-button').addEventListener('click', withdraw)
E('new_deposit').addEventListener('click', startDeposit)

