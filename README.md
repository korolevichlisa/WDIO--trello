## Getting Started
**1 Sign up on [Trello](https://trello.com)**
 **2 Create .env File**: Create a `.env` file in the root of the project directory and add the following environment variables:
```
user_email=your-email
user_pass=your-password
```
## Running Tests

You can run the following tests using the scripts defined in the `package.json` file:

- **All Tests**: Run all tests using wdio:

```bash
npm run wdio
```

- **1**: Run tests to create and manipulate with the board:

```bash
npm run test:board
```

- **2**: Run tests to filtering cards:

```bash
npm run test:filter
```

- **3**: Run tests to search board:

```bash
npm run test:search
```

- **4**: Run tests to go to the editing profile:

```bash
npm run test:edit
```
