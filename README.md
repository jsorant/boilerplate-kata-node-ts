# Boilerplate to practice katas using Node and Typescript

## Setup project

```
npm install
```

## Run tests

### With watch mode and Vitest UI

```
npm test
```

### Without watch mode

```
npm run test -- --run
```

## Run tests with BDD style (Cucumber)

You can also use BDD style. Define features with `.feature` files in `/features` folder, then implement steps in `/features/support` folder.

Run tests using command:

```
npm run test:bdd
```
