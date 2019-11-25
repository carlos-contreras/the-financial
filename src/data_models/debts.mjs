import moment from 'moment';
import Database from 'better-sqlite3';

const db = new Database('payments.db', { verbose: console.log });

const insert = db.prepare(`
  INSERT INTO debts
  (creditorName, description, dueDate, amount, amountIsAnEstimated, createdAt, updatedAt)
  VALUES
  (@creditorName, @description, @dueDate, @amount, @amountIsAnEstimated, @createdAt, @createdAt)
`);

// newDebt struct { creditorName, description, dueDate, amount, amountIsAnEstimated }
const debts = {
  create() {
    db.transaction(() => insert.run({ createdAt: moment().format("L"), ...newDebt }));
  }
}

export default debts;
