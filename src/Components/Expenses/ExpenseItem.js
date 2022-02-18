import "./ExpenseDate.css";
import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  /* Use state is used to change the state of the objects. It should be assigned to a const
    array. Like this const [oldState, newState] where the oldState is the name of the state 
    you would like ot change and the newState is the function that is invoked to change that state 
    And the useState function will always return an array with two values - the old value and the new value. 
    React will only change the component in which the variable was registered, so here only the expense item component is affecte. 
    
    1. Changes in state occur on a per instance basis, so that means that if one instance is affected, the other is not. 
    
    */

    // We are okay with having a const array because we are not reassigning the title. 

/* Steps that make the useState work 
  1. Firstly, declare the const array with the useState mehtod 
  2. Create a function that handles the change of that state, the click handler. 
    Inside of theat function, invoke the function to change the state
  3. Then, just output the title in a tag wherever you would like
  4. Give a reference to the function for the onClick property 
  */

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated value");
    console.log("Clicked!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        
      </div>
    </Card>
  );
};

export default ExpenseItem;
