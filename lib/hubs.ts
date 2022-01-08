import { join } from "path";
import { getFiles } from "./getFiles";

import type { Card } from "../interfaces/Card";

const HUBS_DIR = join(process.cwd(), "data", "hubs");

export function getHubs(): Card[] {
  return getFiles(HUBS_DIR) as Card[];
}
