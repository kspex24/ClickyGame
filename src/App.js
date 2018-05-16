import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
// import ScoreBoard from "./components/ScoreIncrementer";
// import Score from "./components/ScoreBoard";
import cats from "./cats.json";
import Counter from "./components/Counter";
import Jumbotron from "./components/Jumbotron";
import "./App.css";


class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats
  };

  selectCat = id => {
    // Filter this.state.cats for cats with an id not equal to the id being selected
    const cats = this.state.cats.sort(cat => cat.id !== id);
    // Set this.state.cats equal to the new cats array
    this.setState({ cats });
//Check to see if clicked is equal to false

// if false, change to true, add 1 to score
// {this.handleIncrement()}

//if score = 12, display you win message

//if true, set score to 0, display game over message

  };

  // Map over this.state.cats and render a CatCard component for each cat object in random order
  render() {
    return (
      <Wrapper>
        <Jumbotron>
        <Title>Clicky Cat Memory Game</Title>
        <h3>Click a cat to earn a point.  Don't pick the same cat twice though! </h3>
        <h3>Score: {this.state.score}     |     </h3>
        </Jumbotron>
        {this.state.cats.map(cat => (
          <CatCard
            selectCat={this.selectCat}
            id={cat.id}
            key={cat.id}
            image={cat.image}
            clicked={cat.clicked}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
