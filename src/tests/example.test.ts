import { expect, test } from "vitest";

import { example } from "@/helpers";

test("example", () => {
  expect(example.sum(1, 2)).toBe(3);
});
