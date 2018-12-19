import * as test from "tape"
import greeter from "./greeter"

test("example/greeter", (assert) => {
    assert.equal(greeter("World"), "Hello World", "greeter() concat Hello + <name>")
    assert.end()
})