import React, { Component } from "react";
import data from "./Data";
import GroceryList from "./GroceryList";
import PropTypes from "prop-types";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEmployee: null,
      selectedGrocery: null,
      groceries: [
        { name: "Apples", quantity: "10 pcs" },
        { name: "Bananas", quantity: "5 pcs" },
        { name: "Milk", quantity: "3 pcs" },
        { name: "Bread", quantity: "1 pcs" },
        { name: "Eggs", quantity: "10 pcs" },
      ],
      showGroceries: true,
    };
  }

  handleEmployeeHover = (employee) => {
    this.setState({
      selectedEmployee: employee,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedEmployee: null,
    });
  };

  handleGroceryChange = () => {
    this.setState({
      groceries: [
        { name: "Detergent", quantity: "2 pcs" },
        { name: "Toilet Cleaner", quantity: "1 pcs" },
        { name: "Insecticide", quantity: "2 pcs" },
        { name: "Ballon", quantity: "100 pcs" },
      ],
    });
  };

  handleGroceryClick = (grocery) => {
    this.setState({
      selectedGrocery: grocery,
    });
  };
  

  render() {
    const { selectedEmployee, groceries, showGroceries, selectedGrocery } = this.state;

    return (
      <div>
        <h1> 1) Employee's</h1>
        <ul>
          {data.employees.map((employee) => (
            <li
              key={employee.id}
              onMouseEnter={() => this.handleEmployeeHover(employee)}
              onMouseLeave={this.handleCloseModal}
            >
              {employee.fullName}
            </li>
          ))}
        </ul>
        {selectedEmployee && (
          <div>
            <p>Name: {selectedEmployee.fullName}</p>
            <p>Age: {selectedEmployee.age}</p>
            <p>Date of Birth: {selectedEmployee.dob}</p>
            <p>Designation: {selectedEmployee.designation}</p>
            <p>Dept: {selectedEmployee.dept}</p>
            <p>Salary: {selectedEmployee.salary}</p>
            <img src={selectedEmployee.img} alt={selectedEmployee.fullName} />
          </div>
        )}
        {showGroceries && (
          <div>
          
            <GroceryList groceries={groceries} handleGroceryClick={this.handleGroceryClick} />
            {selectedGrocery && (
              <div>
                <p>Selected Grocery: {selectedGrocery.name}</p>
                <p>Quantity: {selectedGrocery.quantity}</p>
              </div>
            )}
          </div>
        )}
        <button onClick={this.handleGroceryChange}>Change Grocery List</button>
        <h2> 3) Click on the item to know the quantity to buy</h2>
      </div>
    );
  }
}

App.propTypes = {
  selectedEmployee: PropTypes.object,
  groceries: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.string.isRequired,
    })
  ).isRequired,
  showGroceries: PropTypes.bool.isRequired,
  selectedGrocery: PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
  }),
};

export default App;


