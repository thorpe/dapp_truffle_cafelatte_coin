pragma solidity ^0.4.0;
import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";

contract CafelatteCoin is StandardToken {
  string public name = "CafelatteCoin";
  string public symbol = "CLC";
  uint public decimals = 2;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  function CafelatteCoin() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}
