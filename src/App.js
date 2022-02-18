import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";
import React, { useState } from "react";
import ExpensesFilter from "./Components/Expenses/ExpenseFilter";

// The code that we write with React is very abstract and high level and is translated into the HTML and CSS later.

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Paper Towel",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // The data that will be displayed on the main page. It is an array of objects.

  const [expense, setExpenses] = useState(DUMMY_DATA);
  const [yearData, setYearData] = useState("2020");

  // This is the under the hood code that is automatically created when you use JSX.
  // The process goes something like this.

  /***************************************************************** */
  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );

  // Which then turns into what is down below and that then turns into the actual HTML and CSS code
  //

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  // Handler that just prints the object when a new expense is added
  const addExpenseHandler = (expenseData) => {
    console.log(expenseData);
    setExpenses((prevExpenses) => {
      // Note, always have the spread operator first and then the object you wish to attach.
      return [...prevExpenses, expenseData];
    });
  };

  // const years = [DUMMY_DATA.date.getFullYear()];

  // return [prevExpenses.

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <ExpensesFilter onYearChange = {yearChangeHandler} /> */}
      <Expenses items={expense} />
    </div>
  );
};

export default App;
