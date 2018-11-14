import { assert } from "chai"
import { SomeService, doSomething, SomeAsyncService, doSomethingAsync } from "./service"

describe("example/service", () => {
    it("test mocking service", () => {
        const service: SomeService = {
            doSomething: () => true
        }
        assert.isTrue(doSomething(service))
    })

    it("test mocking async service", (done) => {
        const service: SomeAsyncService = {
            doSomething: () => Promise.resolve(true)
        }
        doSomethingAsync(service)
            .then((result) => {
                assert.isTrue(result)
                done()
            })
    })
})