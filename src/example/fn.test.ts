import test from "ava"
import greeter from "./greeter"

test("support object spread", (assert) => {
    const obj = { x: 1, y: 2 }
    assert.deepEqual({ ...obj, y: 3 }, { x: 1, y: 3 }, "support object spread")
})

test("support import statement", (assert) => {
    assert.truthy(greeter, "support import statement")
})

test("support es6 Array.find", (assert) => {
    assert.is([1, 2, 3, 4, 5].find((x) => x / 2 === 1), 2, "support es6 Array.find()")
})
