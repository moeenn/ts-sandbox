import { add } from "@/utilities"
import { describe, it, expect } from "vitest"

describe("check math functions", () => {
  it("add function", () => {
    const input = [10, 20]
    const expected = 30
    const got = add(input[0], input[1])

    expect(got).toBe(expected)
  })
})