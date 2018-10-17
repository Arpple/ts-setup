import { assert } from "chai"
import { stubInterface } from "ts-sinon"
import * as sinon from "sinon"
import { SomeService, doSomething, SomeAsyncService, doSomethingAsync } from "./service"

describe("service", () => {
    it("test mocking service", () => {
        const service = stubInterface<SomeService>()
        service.doSomething = sinon.stub().returns(true)
        assert.isTrue(doSomething(service))
    })

    it("test mocking async service", (done) => {
        const service = stubInterface<SomeAsyncService>()
        service.doSomething = sinon.stub().returns(Promise.resolve(true))
        doSomethingAsync(service)
            .then((result) => {
                assert.isTrue(result)
                done()
            })
    })
})