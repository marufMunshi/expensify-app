import React from 'react';
import { shallow } from 'enzyme';
import numeral from 'numeral';
import { ExpensesSummery } from '../../components/ExpensesSummery';
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let expensesTotal, expenseCount;

expensesTotal = selectExpensesTotal(expenses);
expenseCount = expenses.length;

test('should render expensesTotal and expenseCount correctly', () => {
    const wrapper = shallow( 
        <ExpensesSummery 
            expenseTotal={expensesTotal}
            expenseCount={expenseCount}              
        /> 
    );
    expect(wrapper).toMatchSnapshot();
});
