import Card from '../UI/Card';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const onFilterChangeHandler = (value) => {
    setFilteredYear(value);
  };

  const filterItems = props.items.filter(
    (item) => !filteredYear || item.date.getFullYear() === +filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onFilterChange={onFilterChangeHandler}
        />
        <ExpensesChart expenses={filterItems} />
        <ExpensesList items={filterItems} />
      </Card>
      ;
    </div>
  );
};

export default Expenses;
