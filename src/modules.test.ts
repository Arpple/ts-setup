import test from "ava"
import { x } from "~/modules"

test("import modules", (assert) => {
	assert.is(x, 1)
})
