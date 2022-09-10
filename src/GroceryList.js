import { Component } from "react";
import bag from './bag.png'

export class GrocryList extends Component {
  state = {
    userInput: '',
    groceryList: []
  };

  onChangeEvent(e) {
    this.setState({userInput: e})
  }
  addItem(input) {
    if( input === '') {
        alert ('Please enter an item')
    } else {
    let listArray = this.state.groceryList;
    listArray.push(input);
    this.setState({ groceryList : listArray, userInput:''})
  }
}
  crosseWord(event) {
    const li = event.target;
    li.classList.toggle('crossed');

  }
deleteItem() {
    let listArray = this.state.groceryList;
    listArray =[];
    this.setState({groceryList : listArray})
}
onFormSubmit(e) {
  e.preventDefault()
}
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="container">
            <input
              type="text"
              placeholder="What to you want to buy today"
              onChange={(e) => {
                this.onChangeEvent(e.target.value);
              }}
              value={this.state.userInput}
            />
          </div>
          <div className="container">
            <button
              className="add "
              onClick={() => this.addItem(this.state.userInput)}> ADD</button>
          </div>
          <ul>
            {this.state.groceryList.map((item, index) => (
              <li onClick={this.crosseWord} key={index}>
                <img src={bag} width="30px" alt="bag" />
                {item}
              </li>
            ))}
          </ul>
          <div className="container">
            <button
              className="delete"
              onClick={() => this.deleteItem(this.state.userInput)}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}