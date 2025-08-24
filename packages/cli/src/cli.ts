import yargs from "yargs";
import { hideBin } from "yargs/helpers";

import { helloCommand } from "./commands/hello.js";
import { indexCommand } from "./commands/index.js";

await yargs(hideBin(process.argv))
  .command(indexCommand)
  .command(helloCommand)
  .parse();
