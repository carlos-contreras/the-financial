import minimist from 'minimist'

const args = minimist(process.argv.slice(2))

export default `hello world! from ES6, this are the options passed: ${JSON.stringify(args)}`
