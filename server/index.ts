import express from "express";
import { getUsers } from "./service/admin_service";
import { register } from "./service/registration_service";
import cors = require("cors");

const app = express();

app.use(cors());

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
    //res.json(registerUser);
  } catch (error) {
    console.log("Error! " + error);
  }
});

app.get("/admin-report", async (req, res) => {
  let users = await getUsers();
  if (typeof users === "string") {
    res.status(500).send(users);
  } else res.status(200).send(users);
});

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
