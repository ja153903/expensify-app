import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Store creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const item1 = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const item2 = store.dispatch(addExpense({ description: 'new laptop', amount: 500000 }));

store.dispatch(sortByAmount());


const demoState = {
    expenses: [{
        id: 'lsdkfjsldkf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};