import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map(({ description, amount, createdAt }, index) => {
                return (<ExpenseListItem key={index} 
                                         description={description}
                                         createdAt={createdAt}
                                         amount={amount} />);
            })
        }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);