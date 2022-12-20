import { createConnection, DataSource } from "typeorm";
import ormConfig from "../ormconfig";

export default new DataSource({
  type: "sqlite",
  database: "./src/database.sqlite",
  entities: ["./src/entities/**.ts"],
  migrations: [
    "./src/database/migrations/**.ts"
  ]
})
