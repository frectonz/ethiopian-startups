import { join } from "path";
import { getFiles } from "./getFiles";

import type { Card } from "../interfaces/Card";

const VCS_DIR = join(process.cwd(), "data", "venture_capital");

export function getVCs(): Card[] {
  return getFiles(VCS_DIR) as Card[];
}
