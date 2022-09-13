import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("all");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    // console.log(setFilteredYear);
  };

  const filteredExpense = props.items.filter((item) => {
    if (filteredYear === "all") {
      return item;
    } else {
      return item.date.getFullYear().toString() === filteredYear;
    }
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpense} />
    </Card>
  );
};

export default Expenses;
