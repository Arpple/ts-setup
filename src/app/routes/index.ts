import { RequestHandler, Router } from "express"
import { Reader } from "fp-ts/lib/Reader"

const helloController: Reader<string, RequestHandler> =
	(config) => (req, res) => {
		res.send(`Hello ${config}`)
	}

export const routes: Reader<string, Router> = (config) => {
	const r = Router()
	r.get("/hello", helloController(config))
	return r
}
