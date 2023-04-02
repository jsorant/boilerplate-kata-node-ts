# Boilerplate to practice katas using Node and Typescript

## Setup project

```
npm install
```

## Run tests

### VSCode

Just hit F5 to run tests. Launch command specified in `.vscode/launch.json`.

### Using a terminal

```
npm test
```

### Code coverage

```
npm run test:coverage
```

## Run tests with BDD style (Cucumber)

You can also use BDD style. Define features with `.feature` files in `/features` folder, then implement steps in `/features/support` folder.

Run tests using command:

```
npm run test:bdd
```
