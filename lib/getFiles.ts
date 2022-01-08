import { join } from "path";
import { parse } from "yaml";
import { readdirSync, readFileSync } from "fs";

export function getFiles(folder: string): any[] {
  return readdirSync(folder).map((file) => {
    const startupFile = readFileSync(join(folder, file), "utf-8");
    return parse(startupFile);
  });
}
