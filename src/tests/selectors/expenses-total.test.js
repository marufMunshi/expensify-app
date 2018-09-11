import selectExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

let testAllTotal = expenses[0].amount + expenses[1].amount + expenses[2].amount;
let testSingleTotal = expenses[0].amount;

test('should correctly add up multiple expenses', () => {
    const total = selectExpenseTotal(expenses);
    expect(total).toBe(testAllTotal);
});

test('should correctly add up a single expense', () => {
    const total = selectExpenseTotal([expenses[0]]);
    expect(total).toBe(testSingleTotal);
});

test('should return 0 if no expenses', () => {
    const total = selectExpenseTotal([]);
    expect(total).toBe(0);
});
