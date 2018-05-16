
import React from "react";


class Counter extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0
  };

  // Increases this.state.count by 1
  handleIncrement = () => {
    // Use the setState method to update a component's state
    this.setState({ score: this.state.score + 1 });
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
        <div>
         <card className="card" onClick={this.handleIncrement}>
          <p>Score: {this.state.score}</p>
      
           </card>
        </div>
    
    );
  }
}

export default Counter;
