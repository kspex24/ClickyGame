import React, { Component } from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cats from "./cats.json";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import "./App.css";


class App extends Component {
  // Setting this.state.cats to the cats json array
  state = {
    cats, 
    score: 0,
    clicked: false,
    highScore: 0
  };

  selectCat = id => {
    // Sort this.state.cats for cats with an id not equal to the id being selected
    const cats = this.state.cats.sort(cat => cat.id !== id);
    // Set this.state.cats equal to the new cats array
    this.setState({ cats });
    this.setState({ score: this.state.score + 1 });
    this.setState({ clicked: this.state.clicked === true});
    console.log(this.state)
//Check to see if clicked is equal to false
  // this.setState({ this.cats.clicked: true });

// if false, change to true, add 1 to score
// {this.handleIncrement()}

//if score = 12, display you win message

//if true, set score to 0, display game over message

  };

  // Map over this.state.cats and render a CatCard component for each cat object in random order
  render() {
    return (
      <Wrapper>
        <Nav>   </Nav>
        <Jumbotron>
        <Title>Clicky Cat Memory Game</Title>
        <h3>Click a cat to earn a point.  Don't pick the same cat twice though! </h3>
        <p>Score: {this.state.score}   |  High Score: {this.state.highScore} </p>
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
};

export default App;
