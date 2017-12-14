//newj
import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  state = {
    friends,
    clickedCharacters: [],
    score: 0
  };

  imageClick = event => {
    const currentCharacter = event.target.alt;
    const characterAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;

    if (characterAlreadyClicked) {
      this.setState({
        friends: this.state.friends.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedCharacters: [],
        score: 0
      });
    } else {
      this.setState(
        {
          friends: this.state.friends.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              friends: this.state.friends.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <div className="wrapper">
          {this.state.friends.map(friend => (
            <FriendCard
              imageClick={this.imageClick}
              id={friend.id}
              key={friend.id}
              image={friend.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;