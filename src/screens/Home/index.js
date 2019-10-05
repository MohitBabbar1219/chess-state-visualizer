import React from 'react';
import Aux from './../../components/Aux';
import './home.css';
import Board from "../../components/Board";

class Home extends React.Component {
  state = {
    gameStateJson: "",
    gameState: []
  };

  fillGameState = () => {
    const gameState = JSON.parse(this.state.gameStateJson);
    this.setState({gameState});
  };

  render() {
    return (<Aux>
      <section className="container pt-5">
        <h1 className="text-center pb-2">
          Chess
        </h1>
        <div className="d-flex">
          <div className="flex-1 px-4">
            <textarea className="board-state-text-area d-block"
                      onChange={(evt) => this.setState({gameStateJson: evt.target.value})}
                      placeholder="Paste game state JSON here"
                      value={this.state.gameStateJson}/>
            <button onClick={this.fillGameState} className="w-100 mt-3 show-state-butt">Show State</button>
          </div>
          <Board gameState={this.state.gameState} />
        </div>
      </section>
    </Aux>)
  }
}

export default Home;