import { add } from "./global";

// declare suite's global function here but call inside each file
// to make it works when not running from root (ex: run single test from IDE plugin)
export const addGlobal = add

describe("example", () => {
    require("./fn.test")
    require("./greeter.test")
    require("./service.test")
    require("./global.test")
})