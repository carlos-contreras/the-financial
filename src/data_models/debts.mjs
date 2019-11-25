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

// newDebt struct { creditorName, description, dueDate, amount, amountIsAnEstimated }
const debts = {
  create(newDebt) {
    db.transaction(() => {
      const result = insert.run({ createdAt: moment().format("L"), ...newDebt })
      console.log(result)
    });
  }
}

export default debts;
