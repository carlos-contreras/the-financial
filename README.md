# the-financial
This tool will help you track your recurrent payments on a monthly basis

### Setup

use `yarn install`
then `yarn run build`
then `yarn link`
then `payments --with-some-options`

### Dependencies

- For handling cli params: https://www.npmjs.com/package/minimist
- For cli colored output: https://www.npmjs.com/package/cli-color
- For handling data base migrations: https://www.npmjs.com/package/db-migrate
- For database connection: https://www.npmjs.com/package/better-sqlite3


### Setup
- Install dependencies `brew install nvm yarn sqlite`
- Install stable version of node `nvm Install --lts`
- Setup NVM to use that version `nvm use --lts`
- Install dependencies `yarn install`
- Create database `yarn run db-migrate db:create payments.db`
- Run migrations `yarn run db-migrate up`
