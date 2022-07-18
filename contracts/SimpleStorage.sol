// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  //store hash in the smart contract as state variable
  bytes32 jsonHash;
  
  function set(bytes32 _x) public {
    jsonHash = _x;
  }

  function get() public view returns (bytes32) {
    return jsonHash;
  }
}