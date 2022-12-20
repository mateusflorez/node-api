import express from "express";

import dataSource from "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, async () => {
  await dataSource.initialize();
  console.log("Server is running on port 3333");
});
