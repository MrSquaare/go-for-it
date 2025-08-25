import path from "path";

import { render } from "cli-testing-library";
import { describe, expect, it } from "vitest";

describe("default command", () => {
  const cli = path.join(__dirname, "../src/cli.ts");
  const noConfigCwd = path.join(__dirname, "./cwds/no-config");

  it("should display default message", async () => {
    const instance = await render("tsx", [cli], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText("Go for it!")).toBeInTheConsole();
  });

  it("should display help message", async () => {
    const instance = await render("tsx", [cli, "--help"], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText("Show help")).toBeInTheConsole();
  });
});
