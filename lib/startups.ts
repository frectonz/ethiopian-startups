import { join } from "path";
import { getFiles } from "./getFiles";

import type { Startup } from "../interfaces/Startup";

const STARTUPS_DIR = join(
  process.cwd(),
  "ethiopian-startups",
  "../data/startups"
);

export function getStartups(): Startup[] {
  return getFiles(STARTUPS_DIR) as Startup[];
}
