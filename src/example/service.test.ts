import { assert } from "chai"
import { doSomething, doSomethingAsync, SomeAsyncFn, SomeFn } from "./service"

describe("example/service", () => {
    it("test mocking service", () => {
        const mockFn: SomeFn = () => true
        assert.isTrue(doSomething(mockFn))
    })

    it("test mocking async service", async() => {
        const service: SomeAsyncFn = () => Promise.resolve(true)

        const result = await doSomethingAsync(service)
        assert.isTrue(result)
    })
})