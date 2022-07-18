export const SIMPLE_STORAGE_ADDRESS = '0x7A31655e052202B321A495D12181414192877c42';
export const SIMPLE_STORAGE_ABI = [
	{
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_x",
				"type": "bytes32"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]