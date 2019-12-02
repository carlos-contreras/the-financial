import moment from 'moment';
import Database from 'better-sqlite3';

const TABLE_NAME = "debts"
const db = new Database('payments.db', { verbose: console.log });

const insert = db.prepare(`
  INSERT INTO ${TABLE_NAME}
  (creditorName, description, dueDate, amount, amountIsAnEstimated, createdAt, updatedAt)
  VALUES
  (@creditorName, @description, @dueDate, @amount, @amountIsAnEstimated, @createdAt, @createdAt)
`);

const insertDebt = db.transaction((debtData) => {
  // console.log(debtData)
  return insert.run({ createdAt: moment().format(), ...debtData })
});

// newDebt struct { creditorName, description, dueDate, amount, amountIsAnEstimated }
const debts = {
  create(newDebt) {
    return insertDebt(newDebt);
  }
}

// Intl.DateTimeFormat('en-US').format(

export default debts;
