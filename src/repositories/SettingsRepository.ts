import dataSource from "../database";
import { Setting } from "../entities/Setting";

export default dataSource.getRepository(Setting);
