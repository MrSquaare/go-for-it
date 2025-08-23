import { hello } from "@go-for-it/core";
import { Box, render, Text } from "ink";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

yargs(hideBin(process.argv))
  .command(
    "$0",
    "Go for it!",
    () => {},
    () => {
      render(
        <Box>
          <Box borderStyle={"round"}>
            <Text>Go for it!</Text>
          </Box>
        </Box>,
      );
    },
  )
  .command(
    "hello [name]",
    "Say hello",
    (yargs) => {
      return yargs
        .positional("name", {
          describe: "Name to say hello to",
          type: "string",
        })
        .option("loud", {
          alias: "L",
          type: "boolean",
          description: "Say it loud",
        });
    },
    (argv) => {
      let message = hello(argv.name);

      if (argv.loud) {
        message = message.toUpperCase();
      }

      render(
        <Box>
          <Box borderStyle={"round"}>
            <Text>{message}</Text>
          </Box>
        </Box>,
      );
    },
  )
  .parse();
