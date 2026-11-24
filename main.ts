import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "That spot was not missed. My lidar called it a sock, my brush agreed it was a sock, and I do not vacuum socks. Policy is policy.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY);
