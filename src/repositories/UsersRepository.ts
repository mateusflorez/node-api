import dataSource from "../database";
import { User } from "../entities/User";

export default dataSource.getRepository(User);
