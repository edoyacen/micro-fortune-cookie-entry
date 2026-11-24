// This entry writes the answer for One-Liner Laugh Lab to the output directory,
// emitting /output/entry.txt so the grader can read the one-liner verbatim.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const answer = "My robot vacuum ate a sock and filed a warranty claim: the suction was perfect, the fabric was just too committed.";
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), answer, 'utf8');

console.log(`Wrote ${answer.length} characters to entry.txt`);
