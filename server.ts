import express from "express";
import { getUsers } from "./src/service/admin_service";
import { register } from "./src/service/registration_service";
import cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

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

app.get("/admin-report", async (req, res) => {
  res.header;
  let users = await getUsers();
  if (typeof users === "string") {
    res.status(500).send(users);
  } else res.status(200).send(users);
});

const port = process.env.port || 8081;
app.listen(port, () => {
  console.log("server listening on port 8081");
});
