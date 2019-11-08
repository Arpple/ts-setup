import test from "ava"
import { x } from "~/app/modules"

test("import modules", (assert) => {
	assert.is(x, 1)
})
