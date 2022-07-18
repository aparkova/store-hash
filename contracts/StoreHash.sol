// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract StoreHash {
  bytes32 public storedData;
  event stored(address _to, bytes32 _amount);

  constructor(bytes32 initVal) {
    emit stored(msg.sender, initVal);
    storedData = initVal;
  }

  function set(bytes32 x) public {
    emit stored(msg.sender, x);
    storedData = x;
  }

  function get() view public returns (bytes32 retVal) {
    return storedData;
  }
}