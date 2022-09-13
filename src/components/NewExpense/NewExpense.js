import React from "react";
import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAddExpense, setIsAddExpense] = useState(false);

  const addExpenseStatusHandler = () => {
    setIsAddExpense(true);
  };

  const removeExpenseStatusHandler = () => {
    setIsAddExpense(false);
  };

  const saveExpenseDataHandler = (data) => {
    const expenseData = { ...data, id: Math.random().toString() };
    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isAddExpense && (
        <button onClick={addExpenseStatusHandler}>Add expense</button>
      )}
      {isAddExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelSubmit={removeExpenseStatusHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
