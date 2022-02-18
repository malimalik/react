import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpensesFilter = (props) => {
  //   const [userInput, setUserInput] = useState({
  //     year: "",
  //   });

  const yearChangeHandler = (event) => {
    props.onSaveYearData(event.target.value);
  };

  //   const submitHandler = (event) => {
  //     event.preventDefault();

  //     const yearData = {
  //       year: userInput.year,
  //     };
  //     console.log(yearData);
  //     props.onSaveYearData(yearData);
  //   };



  // This widget creates a drop-down list. 
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value = {props.defaultSelect} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
