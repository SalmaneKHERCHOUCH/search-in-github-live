import express from "express";
import cors from "cors";
import routes from "./routes";

const fetch = require("node-fetch");


export function launch(port) {
  const application = express();
  
  application.use(cors());
  application.use("/", routes);

  application.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
  });
}
