import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
const Expenses = (props) => {
  const expenseItems = props.items.map((el) => (
    <ExpenseItem
      key={el.id}
      date={el.date}
      amount={el.amount}
      title={el.title}
    ></ExpenseItem>
  ));
  return <Card className="expenses">{expenseItems}</Card>;
};

export default Expenses;
