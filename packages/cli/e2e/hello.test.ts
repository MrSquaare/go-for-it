import path from "path";

import { render } from "cli-testing-library";
import { describe, expect, it } from "vitest";

describe("hello command", () => {
  const cli = path.join(__dirname, "../src/cli.ts");
  const noConfigCwd = path.join(__dirname, "./cwds/no-config");
  const jsConfigCwd = path.join(__dirname, "./cwds/js-config");
  const jsonConfigCwd = path.join(__dirname, "./cwds/json-config");
  const tsConfigCwd = path.join(__dirname, "./cwds/ts-config");

  it("should display default greeting", async () => {
    const instance = await render("tsx", [cli, "hello"], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/Hello, World!/)).toBeInTheConsole();
  });

  it("should display custom greeting", async () => {
    const instance = await render("tsx", [cli, "hello", "John"], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/Hello, John!/)).toBeInTheConsole();
  });

  it("should display loud greeting", async () => {
    const instance = await render("tsx", [cli, "hello", "John", "--loud"], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/HELLO, JOHN!/)).toBeInTheConsole();
  });

  it("should display loud greeting with js config", async () => {
    const instance = await render("tsx", [cli, "hello", "John"], {
      cwd: jsConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/HELLO, JOHN!/)).toBeInTheConsole();
  });

  it("should display loud greeting with json config", async () => {
    const instance = await render("tsx", [cli, "hello", "John"], {
      cwd: jsonConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/HELLO, JOHN!/)).toBeInTheConsole();
  });

  it("should display loud greeting with ts config", async () => {
    const instance = await render("tsx", [cli, "hello", "John"], {
      cwd: tsConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText(/HELLO, JOHN!/)).toBeInTheConsole();
  });

  it("should display help message", async () => {
    const instance = await render("tsx", [cli, "hello", "--help"], {
      cwd: noConfigCwd,
    });

    expect(instance).toBeInTheConsole();
    expect(await instance.findByText("Show help")).toBeInTheConsole();
  });
});
