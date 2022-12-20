import { DataSourceOptions } from "typeorm";

const connectionSource: DataSourceOptions = {
  type: "sqlite",
  database: "./src/database.sqlite",
  entities: ["./src/entities/**.ts"],
  migrations: [
    "./src/database/migrations/**.ts"
  ]
};

export default connectionSource;
