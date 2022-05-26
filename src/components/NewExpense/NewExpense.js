import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';
const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (data) => {
    const expense = {
      id: Math.random().toString(),
      ...data,
    };
    props.onAddExpense(expense);
    setShowForm(false);
  };
  const formContent = showForm ? (
    <ExpenseForm
      onCancel={() => setShowForm(false)}
      onSaveFormData={saveExpenseDataHandler}
    />
  ) : (
    <button onClick={() => setShowForm(true)}>Add New Expense</button>
  );
  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
