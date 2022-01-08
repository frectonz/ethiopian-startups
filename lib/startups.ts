import { join } from "path";
import { getFiles } from "./getFiles";

import type { Card } from "../interfaces/Card";

const STARTUPS_DIR = join(process.cwd(), "data", "startups");

export function getStartups(): Card[] {
  return getFiles(STARTUPS_DIR) as Card[];
}
