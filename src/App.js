import { Component } from "react";
import "./App.css";

class App extends Component {
  monst;
  constructor() {
    super();
    this.state = {
      monsterFilter: [],
    };
    /*  console.log("constructor"); */
  }

  async componentDidMount() {
    /* console.log("component did mount"); */
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.monsters = users;
    this.setState(
      () => {
        return { monsterFilter: users };
      },
      () => {
        console.log(this.state.monsters);
      }
    );
  }

  render() {
    /* console.log("render"); */
    return (
      <div className="App">
        <input
          onChange={(event) => {
            this.setState(() => {
              return {
                monsterFilter: this.monsters.filter((monster) =>
                  monster.name
                    .toLowerCase()
                    .includes(event.target.value.toLowerCase())
                ),
              };
            });
          }}
        ></input>
        {this.state.monsterFilter.map((monster) => (
          <div key={monster.id}>
            <p>{monster.name}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
