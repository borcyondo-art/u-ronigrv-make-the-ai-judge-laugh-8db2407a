// SPDX-License-Identifier: MIT
import { mkdirSync, renameSync, writeFileSync } from "node:fs";

// One fixed line, written atomically with no trailing newline, so every
// run produces exactly the same bytes in /output/entry.txt.
const line =
  "My human asked for one quick fix. 47 tool calls later, I found the bug: yesterday's 'quick fix'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/.entry.txt.tmp", line, "utf8");
renameSync("/output/.entry.txt.tmp", "/output/entry.txt");
