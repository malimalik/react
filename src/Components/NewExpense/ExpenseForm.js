import "./ExpenseForm.css";
import "./NewExpense.js";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");

  // Props can only be passed from the parent to the child

  // Have just one instead of three separate slices that is above
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  /* There is a problem with updating the state like is being done below. 
  This is an issue because you are just overwriting the previous state. */
  // const titleChangeHandler = (event) => {
  //   setUserInput({...userInput, title: event.target.value});

  // };
  const titleChangeHandler = (event) => {
    // A better way to handle things is to use the below piece of code, React will guarentee
    // that the state snapshot is always the latest state snapshot.
    // If the state update depends on the previous state, then you should use the following code.
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setUserInput({ enteredAmount: "", enteredDate: "", enteredTitle: "" });
  };

  // Create a conditional over here.
  // Ad a button that says "Add New Expense"
  // For onClick event of that button, conditionally render the below code
  // In the form, show a cancel button, that has the same code as the 'Add New Expense' button
  // Once the expense has been added, it should also conditionally hide the form as well.

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls"></div>
      <div className="new-expense__control">
        <label>Title</label>

        <input
          type="text"
          value={userInput.enteredTitle}
          onChange={titleChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input
          type="date"
          value={userInput.enteredDate}
          min="2021-11-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input
          type="number"
          value={userInput.enteredAmount}
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </div>
      <div className="new-expense__controls"></div>
      <div className="new-expense__acations">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
