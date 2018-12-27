import test from "ava"
import { doSomething, doSomethingAsync, SomeAsyncFn, SomeFn } from "./service"

test("example/service", async(assert) => {
    const mockFn: SomeFn = () => true
    assert.true(doSomething(mockFn), "sync service")

    const service: SomeAsyncFn = () => Promise.resolve(true)
    assert.true(await doSomethingAsync(service), "async service")
})