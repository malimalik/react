// This is the first file that is executed, initially.
// We write the code in an abstract way but the actual code running is different.

import ReactDOM from "react-dom";
import React from "react";
// import ExpenseItem from "./Components/ExpenseItem";

// In Vanilla JS, we cannot import a CSS file into a JavaScript file
import "./index.css";
import App from "./App";

// This code normally would not work but here it does and runs because this is not the code that is compiled.

// The global document object is being called.
// The <App/> is a component and the syntax is a JSX syntax.
// The below line should only be done for the root component. 
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<ExpenseItem />, document.getElementById("child"));
