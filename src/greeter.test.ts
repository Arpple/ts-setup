import { assert } from "chai"
import greeter from "./greeter"


describe("greeter", () => {
    it("greeter() return 'Hello + :name'", () => {
        assert.equal(greeter("World"), "Hello World")
    })
});