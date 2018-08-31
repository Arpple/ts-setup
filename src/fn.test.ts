import { assert } from "chai"
import greeter from "./greeter"

describe("fn", () => {
    it("support object spread", () => {
        const obj = { x: 1, y: 2 }
        assert.deepEqual({ ...obj, y: 3 }, { x: 1, y: 3 })
    })

    it("support es6 import", () => {
        assert.isNotNull(greeter)
    })
})