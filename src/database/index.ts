import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "./src/database.sqlite",
  entities: ["./src/entities/**.ts"],
  migrations: [
    "./src/database/migrations/**.ts"
  ]
})
