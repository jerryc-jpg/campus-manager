const port = process.env.PORT || 8080;
const app = require("./app");
const { syncAndSeed } = require("./db");

syncAndSeed().then(() => {
  app.listen(port, () => console.log(`listening on port ${port}`)
  );
}).catch((err) => {
    err => console.log(err)
});

