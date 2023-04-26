import { v4 as uuidv4 } from "uuid";
import { Team } from "../../teams/entities/Team";

class User {
  id: string;

  name: string;

  password: string;

  created_at: Date;

  team?: Team;

  constructor() {
    if (!this.id) [(this.id = uuidv4())];
  }
}

export { User };
