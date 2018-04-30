import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Nav from "./components/Nav";
import cartoons from "./cartoons.json";
// import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    cartoons: cartoons,
    score: 0,
    guessed: [],
    status: "",
    topScore: 0
  };


  checkForGuessed = id => {
    this.state.cartoons.sort(function(a, b){return 0.5 - Math.random()});

    if(this.state.guessed.includes(id)) {
      this.setState({ score: 0, guessed: [], status:"You Lost! That cartoon was already picked" });

    }
    else {
      if (this.state.guessed.length === 11) {
        this.setState({ status:"Winner", guessed: [], score: 0 });
      }
      else {
        if(this.state.score + 1 > this.state.topScore) {
          this.setState({ score: this.state.score + 1, status: "You guessed correctly", topScore: this.state.topScore+1});
        }
        else{
          this.setState({ score: this.state.score + 1, status: "You guessed correctly"});

        }
        this.state.guessed.push(id);
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <Nav
            counter={this.state.score}
            status={this.state.status}
            topScore={this.state.topScore}
          />
        </div>
          {this.state.cartoons.map(cartoons => (
            <FriendCard
              check={this.checkForGuessed}
              id={cartoons.id}
              key={cartoons.id}
              name={cartoons.name}
              image={cartoons.image}
            />
          ))}
</div>
    );
  }
}

export default App;
