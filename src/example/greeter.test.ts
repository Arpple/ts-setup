import test from "ava"
import greeter from "./greeter"

test("greeter()", (assert) => {
    assert.is(greeter("World"), "Hello World", "should return Hello + <name>")
})