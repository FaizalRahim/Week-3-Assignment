import React, { Component } from "react";

class GroceryList extends Component {
  render() {
    const { groceries, handleGroceryClick } = this.props;

    return (
      <div>
        <h2>2) Grocery List</h2>
        <ul>
          {groceries.map((grocery) => (
            <li key={grocery.name} onClick={() => handleGroceryClick(grocery)}>
              {grocery.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default GroceryList;

