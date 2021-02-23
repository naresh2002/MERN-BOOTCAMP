const express = require("express");

const app = express();

const port = 3000;

const homepage = (req, res) => {
  return res.send("Homepage it is")
}

const ishomepage = (req, res, next) => {
  console.log("isHomepage it is")
  next();
}

const isloggedIN = (req, res, next) => {
  console.log("is it logged in")
  next();
}

app.get("/",isloggedIN, ishomepage, homepage);

app.get("/admin", (req, res) => {
  return res.send("Admin")
});

app.get("/signup", (req, res) => {
    return res.send("In SIGNUP")
});

app.get("/signout", (req, res) => {
    return res.send("You are signed out")
});

app.listen(port, () => {
    console.log("Server is running at port 3000...")
});

// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })