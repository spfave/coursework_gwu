# 📐 Add Comments to Implementation of the MERN-stack Architecture

Work with a partner to add comments in the [Unsolved README.md file](./Unsolved/README.md) describing the functionality of the code found in [package.json](./Unsolved/package.json), [client/package.json](./Unsolved/client/package.json), and [server/server.js](./Unsolved/server/server.js).

## Add Comments to Implementation of the MERN-stack Architecture

### Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  // Runs the server in production mode
  "start": "node server/server.js",
  // Runs the server under development mode and the client under development mode at the same time
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  // Navigates into the server and client directory and installs the required Node packages
  "install": "cd server && npm i && cd ../client && npm i",
  // Navigates in the server directory and runs the server database seed script
  "seed": "cd server && npm run seed",
  // Navigates to the client directory and builds the client source code to a single optimized bundle
  "build": "cd client && npm run build"
},
```

### Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:

```json
// Informs the client as to what port the server is running on to communicate with it
"proxy": "http://localhost:3001",
```

### Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
// If the server is running in a production environment directs the server to use the public folder that contains
// the client production build bundle
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:

```js
// Catches all routes without a predefined path and returns the index HTML
// in the client build folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```


## 📝 Notes

Refer to the documentation: 

[Create React App docs on Proxying API requests](https://create-react-app.dev/docs/proxying-api-requests-in-development)

---

## 🏆 Bonus

If you have completed this activity, work through the following challenge with your partner to further your knowledge:

* What GitHub tool can we use to automate functionality such as running tests or deploying our applications?

Use [Google](https://www.google.com) or another search engine to research this.

---

© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
