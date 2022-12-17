import { DataSource } from "typeorm";

export const connectionSource = new DataSource({
  type: "sqlite",
  database: "./src/database.sqlite",
  migrations: [
    "./src/database/migrations/**.ts"
  ]
});
