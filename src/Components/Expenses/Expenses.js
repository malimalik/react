import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseForm from "../NewExpense/ExpenseForm";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const saveYearChangeHandler = (enteredYear) => {
    console.log(enteredYear);
    setFilteredYear(enteredYear);
  };

  // The reason why this works is because instead of rendering the items, you are rendering
  // only the filtered items, with the conditions. We just create a new array with the filter
  // that matches the conditions specified and then return all the items that have the filter
  // applied to it.
  const yearExpenses = props.items.filter((yearExpense) => {
    var filter = yearExpense.date.getFullYear().toString() === filteredYear;
    return filter;
    // The above statement returns all the items with the filter applied, so an array.
  });

  // console.log(years)

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onSaveYearData={saveYearChangeHandler}
        />
        <ExpensesChart expenses={yearExpenses} />

        {yearExpenses.length == 0 && <p>There are no expenses</p>}

        <p>There are no expenses</p>
        {yearExpenses.length > 0 &&
          // And then here, we will map the filtered expenses rather than the actual expenses.
          yearExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
