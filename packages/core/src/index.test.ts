import { describe, expect, it } from "vitest";

import { hello } from "./index.js";

describe("hello", () => {
  it("should return default greeting", () => {
    expect(hello()).toEqual("Hello, World!");
  });

  it("should return custom greeting", () => {
    expect(hello("John")).toEqual("Hello, John!");
  });

  it("should uppercase the greeting", () => {
    expect(hello("John", { loud: true })).toEqual("HELLO, JOHN!");
  });
});
