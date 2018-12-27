import test from "ava"
import greeter from "./greeter"

test("example/greeter", (assert) => {
    assert.is(greeter("World"), "Hello World", "greeter() concat Hello + <name>")
})