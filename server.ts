import express from "express";
import { getUsers } from "./src/service/admin_service";
import { register } from "./src/service/registration_service";
import cors = require("cors");

const app = express();

// cors config
app.use(function (req, res, next) {
  if (req.headers.origin) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "X-Requested-With,Content-Type,Authorization"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,PATCH,POST,DELETE");
    if (req.method === "OPTIONS") return res.send(200);
  }
  next();
});

app.use(express.json());

// home route for AWS EB
app.get("/", function (req, res) {
  res.send("merkle server running");
});

// call to register a user
app.post("/register", async (req, res) => {
  try {
    let registration = await register(req.body);

    if (typeof registration === "string") {
      res.status(500).send(registration);
    } else {
      if (registration == false) {
        res.status(400).send("Bad Request");
      } else res.status(200).send("Successfully Registered");
    }
  } catch (error) {
    console.log("Error! " + error);
  }
});

// call to get all users
app.get("/admin-report", async (req, res) => {
  res.header;
  let users = await getUsers();
  if (typeof users === "string") {
    res.status(500).send(users);
  } else res.status(200).send(users);
});

// port
const port = process.env.port || 8081;
app.listen(port, () => {
  console.log("server listening on port 8081");
});
