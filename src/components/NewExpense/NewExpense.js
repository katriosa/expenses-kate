import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  // let initialBtn = "";
  const [isFormOpened, setFormOpened] = useState(false);

  return (
    <div className="new-expense">
      {isFormOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={() => setFormOpened(false)}
        />
      )}
      {!isFormOpened && (
        <button onClick={() => setFormOpened(true)}>Add new expense</button>
      )}
    </div>
  );
}

export default NewExpense;
