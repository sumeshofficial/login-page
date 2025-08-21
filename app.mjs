// Improt modules

import express from "express";
import session from "express-session";
import { ADMIN, PASSWORD } from "./config.js";

const PORT = 3000;
const app = express();

// url encode

app.use(express.urlencoded({ extended: true }));

// no cache store

app.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  res.set("Pragma", "no-cache");
  res.set("Expires", "0");
  next();
});

// session

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 600000 },
  })
);

// view engine

app.set("view engine", "ejs");
app.use(express.static("public"));

// home page

app.get("/", (req, res) => {
  if (req.session.admin) {
    return res.render("index", { admin: true });
  }

  res.redirect("/login");
});

// login page

app.get("/login", (req, res) => {
  if (req.session.admin) {
    return res.redirect("/");
  }

  const err = req.session.err;
  delete req.session.err;

  res.render("index", { admin: false, err });
});

// login data

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN && password === PASSWORD) {
    req.session.admin = username;
    return res.redirect("/");
  }

  let errMsg = "";

  if (username !== ADMIN || password !== PASSWORD) {
    errMsg = "Admin not found";
  }

  req.session.err = errMsg;
  res.redirect("/login");
});

// logout

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/login");
    }
  });
});

app.use((req, res) => {
  res.status(404).render("error");
});

// server creation

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});
