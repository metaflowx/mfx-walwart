export const RefferABI =[
  { "inputs": [], "stateMutability": "nonpayable", "type": "constructor" },
  { "inputs": [], "name": "AlreadyInitialize", "type": "error" },
  { "inputs": [], "name": "InsufficientRewardToken", "type": "error" },
  { "inputs": [], "name": "InvalidAddress", "type": "error" },
  {
    "inputs": [
      { "internalType": "uint256", "name": "startIndex", "type": "uint256" },
      { "internalType": "uint256", "name": "endIndex", "type": "uint256" }
    ],
    "name": "InvalidRange",
    "type": "error"
  },
  { "inputs": [], "name": "InvalidReferrer", "type": "error" },
  { "inputs": [], "name": "NotInitialize", "type": "error" },
  {
    "inputs": [
      { "internalType": "address", "name": "owner", "type": "address" }
    ],
    "name": "OwnableInvalidOwner",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "account", "type": "address" }
    ],
    "name": "OwnableUnauthorizedAccount",
    "type": "error"
  },
  { "inputs": [], "name": "ReferralAlreadyExists", "type": "error" },
  {
    "inputs": [
      { "internalType": "address", "name": "token", "type": "address" }
    ],
    "name": "SafeERC20FailedOperation",
    "type": "error"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "handler", "type": "address" }
    ],
    "name": "UnauthorizedHandler",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      }
    ],
    "name": "ReferralAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "user",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "referrer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "reward",
        "type": "uint256"
      }
    ],
    "name": "ReferralReward",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user_", "type": "address" },
      { "internalType": "address", "name": "referrer_", "type": "address" }
    ],
    "name": "addReferral",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "dcrxRewardToken",
    "outputs": [
      { "internalType": "contract IERC20", "name": "", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "account_", "type": "address" },
      { "internalType": "uint256", "name": "tokenAmount_", "type": "uint256" },
      { "internalType": "uint256", "name": "amountInUsd_", "type": "uint256" }
    ],
    "name": "distributeRewards",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "referrer_", "type": "address" },
      { "internalType": "uint256", "name": "startIndex_", "type": "uint256" },
      { "internalType": "uint256", "name": "endIndex_", "type": "uint256" }
    ],
    "name": "getDirectReferrals",
    "outputs": [
      { "internalType": "address[]", "name": "users", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "amountInUsd_", "type": "uint256" }
    ],
    "name": "getReferralBonusInPercent",
    "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "referrer_", "type": "address" }
    ],
    "name": "getReferralRewards",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "referrer_", "type": "address" }
    ],
    "name": "getReferralsCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user_", "type": "address" }
    ],
    "name": "getReferrer",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "handler",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "rewardToken_", "type": "address" },
      {
        "internalType": "uint256",
        "name": "totalReferralBonusAllocation_",
        "type": "uint256"
      },
      { "internalType": "address", "name": "handler_", "type": "address" }
    ],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "isInitialized",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReferralBonusAllocation",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalReferralBonusReward",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "newOwner", "type": "address" }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "account_", "type": "address" },
      { "internalType": "uint256", "name": "amount_", "type": "uint256" }
    ],
    "name": "transferRewardToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const
