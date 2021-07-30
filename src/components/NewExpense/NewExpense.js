import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData)=> {
        const ExpenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        };
        console.log(ExpenseData);
        props.onAddExpense(ExpenseData);
    }
    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>
        </div>
    )
};
export default NewExpense;