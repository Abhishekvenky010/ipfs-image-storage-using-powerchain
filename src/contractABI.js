export const CONTRACT_ADDRESS = '0x768182e51B1d177ebf61f955176Bd00ba2B35257';
export const CONTRACT_ABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "hashes",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x501895ae"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "time",
        "type": "uint256"
      },
      {
        "name": "hash",
        "type": "string"
      }
    ],
    "name": "setHash",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x2fbaba26"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "get",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x9507d39a"
  }
  ]
