import test from "ava"
import { doSomething, doSomethingAsync, SomeAsyncFn, SomeFn } from "./service"

test("sync", (assert) => {
    const mockFn: SomeFn = () => true
    assert.true(doSomething(mockFn))
})

test("async", async (assert) => {
    const service: SomeAsyncFn = () => Promise.resolve(true)
    assert.true(await doSomethingAsync(service))
})
