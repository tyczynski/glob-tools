# Next.js starter

Next.js boilerplate with great defaults to fast bootstrap your new project.

## Requirements

* [Node.js](https://nodejs.org/en/) 18.x release

## Getting Started

Run the development server:

```bash
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

```bash
# Build the production version
$ npm run build

# Run the cypress in browser mode
$ npm run cypress

# Run the cypress in headless mode
$ npm run cypress:headless

# Run the development server
$ npm run dev

# Run the code style checker and fix auto-fixable errors
$ npm run format

# Run the production version of the build
$ npm run start

# Run the E2E tests in browser mode
$ npm run test:e2e

# Run the E2E tests in headless mode
$ npm run test:e2e:headless

# Run the code linter
$ npm run test:lint

# Run the unit/integration tests
$ npm run test:unit

# Run the watch mode of `npm run test:unit`
$ npm run test:unit:watch

# Run the typescript's type checking
$ npm run test:type-check
```

## Files structure

```
.
├── __mocks__               # Jest mocks
├── .vscode                 # Visual Studio Code configuration folder
├── cypress                 # Cypress folder
├── public                  # Public folder
├── src
│   ├── components          # React components
│   ├── pages               # Next.js pages
│   └── utils               # Utility folder
├── cypress.config.tw        # Cypress configuration file
├── next-env.d.ts           # Auto-generated Next.js types
├── next.config.js           # Next.js configuration file
├── README.md               # README file
└── tsconfig.json            # TypeScript configuration
```

### /public

For more informations, see the Next.js documentaction.

[https://nextjs.org/docs/basic-features/static-file-serving](https://nextjs.org/docs/basic-features/static-file-serving)

### src/pages

For more informations, see the Next.js documentaction.

[https://nextjs.org/docs/basic-features/pages](https://nextjs.org/docs/basic-features/pages)
