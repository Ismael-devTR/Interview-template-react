import {sumExample} from "./example"

import {expect, test} from "vitest"

test("Test example sum two numbers",()=>{
    expect(sumExample(1, 2)).toBe(3)
})