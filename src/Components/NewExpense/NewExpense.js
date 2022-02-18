import "./ExpenseForm.js";
import "./NewExpense.css";
import React, { state, useState } from "react";
import ExpenseForm from "./ExpenseForm.js";
// import { render } from "@testing-library/react";
const NewExpense = (props) => {
  // This function will eventually be triggered when we submit the form
  // and we want to save the data.
  // Props can only be passed from parent to child and we cannot skip intermediate components.

  const [edit, setisEditiing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditiing(false);
  };

  const startEditingHandler = () => {
    setisEditiing(true);
  };
  const stopEditing = () => {
    setisEditiing(false);
  };

  // const [yes, setYes] = useState('Something')

  return (
    <div className="new-expense">
      {!edit && <button onClick={startEditingHandler}>Add New Expense</button>}

      {edit && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
