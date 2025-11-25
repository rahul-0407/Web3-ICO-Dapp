// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface ERC20 {
    function transfer(address recipient, uint256 amount) external returns(bool);
    function balanceOf(address account) external view returns(uint256);
    function allowance(address owner, address spender) external view returns(uint256);
    function approve(address spender, uint256 amount) external view returns(bool);
    function transferFrom(address sender, address recipient, uint256 amount) external view returns(bool);
    function symbol() external view returns(string memory);
    function totalSupply() external view returns(uint256);
    function name() external view returns(string memory);
}

contract TokenICO {
    address public owner;
    address public tokenAddress;
    address public tokenSalePrice;
    uint256 public soldTokens;


    modifier onlyOwner() {
        require(msg.sender == owner, "Only contract owner can perform this operation");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    function updateToken(address _tokenAddress) public onlyOwner() {
        tokenAddress = _tokenAddress;
    }

    function updateTokenSalePrice(uint256 _tokenSalePrice) public onlyOwner() {
        tokenSalePrice = _tokenSalePrice;
    }

    function multiply(uint256 x, uint256 y) internal pure returns(uint256 z) {
        require(y == 0 || (z = x * Y) / y == x);
    }

    function buyToken(uint256 _tokenAmount) public payable {
        require(msg.value == multiply(_tokenAmount, tokenSalePrice), "Insufficient Ether provided for the token purchase");
    }

    function getTokenDetails() {}

    function transferToOwner() {}

    function transferToken() {}

    function withdrawAllTokens() {}


}