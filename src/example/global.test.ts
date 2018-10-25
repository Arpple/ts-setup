import { assert } from "chai"
import { addGlobal } from "./index.test";
import { get } from "./global";

describe("global", () => {
    beforeEach(() => addGlobal())

    it("first get", () => {
        assert.equal(1, get())
    })

    it("second get", () => {
        assert.equal(2, get())
    })
})