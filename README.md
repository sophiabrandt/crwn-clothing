# crwn-clothing

## Table of Contents

- [About](#about)
  - [Built With](#built-with)
- [Installation And Usage](#installation-and-usage)
- [Acknowledgments](#acknowledgments)

## About

> a React learning project building an e-commerce store

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This repo mirrors my learning progress - code is © [Yihua Zhang](https://github.com/ZhangMYihua).

### Built with

- React
- Redux & reselect
- redux-saga
- Stripe

## Installation And Usage

Clone the repo and install dependencies:

```sh
sh -c '(pnpm install && cd client && pnpm install)'
# or:  sh -c '(npm install && cd client && npm install)'
```

You need the Stripe secret key (test key is enough). Create a new file `.env` in the main directory:

```
# ./.env
STRIPE_SECRET_KEY=sk_test_<your-key>
```

For the client, you need the Stripe public key. Add a new file `./client/.env`:

```
# ./client/.env
REACT_APP_STRIPE_PK=pk_test_<your-key>
```

### Development

Run the development server:

```sh
pnpm run dev
# or: npm run dev
```

### Deployment to Heroku

Create a new Heroku application.

Set environment variable with `REACT_APP_STRIPE_PK`, `STRIPE_SECRET_KEY`.

[Deploy with Git](https://devcenter.heroku.com/articles/git):

```bash
git push heroku master
```

## Acknowledgements

- Andrei Neagoie
- Yihua Zhang
