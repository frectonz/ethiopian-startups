import fs from "fs";
import path from "path";
import yaml from "yaml";

import type { Startup } from "../interfaces/Startup";

const STARTUPS_DIR = path.join(
  process.cwd(),
  "ethiopian-startups",
  "../data/startups"
);

export function getStartups(): Startup[] {
  return fs.readdirSync(STARTUPS_DIR).map((file) => {
    const startupFile = fs.readFileSync(path.join(STARTUPS_DIR, file), "utf-8");
    return yaml.parse(startupFile) as Startup;
  });
}
