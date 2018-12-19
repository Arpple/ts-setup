import * as sinon from "sinon"
import * as test from "tape"
import greeter from "./greeter"

test("example/fn", (assert) => {
    const obj = { x: 1, y: 2 }
    assert.deepEqual({ ...obj, y: 3 }, { x: 1, y: 3 }, "support object spread")

    assert.true(greeter, "support import statement")
    assert.equal([1, 2, 3, 4, 5].find((x) => x / 2 === 1), 2, "support es6 Array.find()")

    const fake = sinon.fake.returns(4)
    assert.equal(fake(), 4, "have sinon.fake")

    assert.end()
})