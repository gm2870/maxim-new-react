import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';
const ExpensesList = (props) => {
  if (!props.items.length)
    return <h2 className="expenses-list__fallback">Expenses not found.</h2>;
  return (
    <ul className="expenses-list">
      {props.items.map((el) => (
        <ExpenseItem
          key={el.id}
          date={el.date}
          amount={el.amount}
          title={el.title}
        ></ExpenseItem>
      ))}
    </ul>
  );
};
export default ExpensesList;
