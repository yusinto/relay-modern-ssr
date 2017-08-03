import React, {Component} from 'react';

class App extends Component {
  render() {
    let diceResult = -1;
    if(typeof _roll_dice !== 'undefined') diceResult = _roll_dice();

    return <div>Welcome to WebAsm! Dice: {diceResult}</div>;
  }
}

export default App;
