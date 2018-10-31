import { assert } from "chai"
import greeter from "./greeter"
import * as sinon from "sinon"

describe("example/fn", () => {
    it("support object spread", () => {
        const obj = { x: 1, y: 2 }
        assert.deepEqual({ ...obj, y: 3 }, { x: 1, y: 3 })
    })

    it("support es6 import", () => {
        assert.isNotNull(greeter)
    })

    it("support es6 Array.find()", () => {
        assert.equal([1, 2, 3, 4, 5].find(x => x / 2 === 1), 2)
    })

    it("should have sinon fake fn", () => {
        const fake = sinon.fake()
        fake()
        assert.isTrue(fake.called)
    })
})