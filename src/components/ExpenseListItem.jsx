import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses'; 

//{ dispatch, id, description, amount, createdAt}
const ExpenseListItem = (props) => {
    return (
    <div>
        <h3>{ props.description }</h3>
        <p>{ props.amount } - { props.createdAt } </p>
        <button onClick={() => {
            console.log(props.id);
            props.dispatch(removeExpense({ id: props.id }))
        }}>Remove</button>
    </div>
    );
};

const mapStateToProps = (state) => {
    return {
        expenses: state.expense
    }
}

export default connect(mapStateToProps)(ExpenseListItem);


