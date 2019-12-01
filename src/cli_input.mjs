import minimist from "minimist";
import Debt from "./data_models/debts.mjs";
import prompts from "prompts";
import moment from "moment";

const args = minimist(process.argv.slice(2))

const command = args["_"][0]
const dataModel = args["_"][1]
const createDebtPromptsConfig = [
  {
    type: "text",
    name: "creditorName",
    message: "Who do you own to? (Bank, Utility Company, etc...)",
  },
  {
    type: "text",
    name: "description",
    message: "What is this debt for or about? (Electricity bill, Visa Credit card, etc..)",
  },
  {
    type: "date",
    name: "dueDate",
    message: "When is the due date?",
    initial: moment().endOf("day").toDate(),
    validate: date => date > Date.now() ? true : "Can't be on the past"
  },
  {
    type: 'number',
    name: 'amount',
    message: 'Enter the amount of this debt',
  },
  {
    type: 'confirm',
    name: 'amountIsAnEstimated',
    message: 'Is this amount an estimate?',
    initial: false,
  }
]

const newDebtPrompt = async () => {
  const response = await prompts(createDebtPromptsConfig);
  response.dueDate = moment(response.dueDate).format()
  response.amountIsAnEstimated = response.amountIsAnEstimated.toString()

  return response;
}

const testFn = async () => {
  console.log(`hello world! from ES6, this are the options passed: ${JSON.stringify(args)}`);
  if (command === "new" && dataModel === "debt") {
    const debtParams = await newDebtPrompt();

    Debt.create(debtParams);
  }
}

export default testFn;
