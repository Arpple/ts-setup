import chokidar from "chokidar"
import express from "express"

const server = express()

const env = process.env.NODE_ENV
const isDev = env === undefined || env === "development"

if (isDev) {
	console.log("watch")
	const watcher = chokidar.watch("./src/app")

	watcher.on("ready", () => {
		watcher.on("all", () => {
			console.log("Clearing cache...")
			// tslint:disable-next-line: no-unsafe-any
			Object.keys(require.cache).forEach((id) => {
				if (/[\/\\]src[\/\\]app[\/\\]/.test(id))
					// tslint:disable-next-line
					delete require.cache[id]
			})
		})
	})
}

console.log("read config")
const config = "World"

server.use(async (req, res, next) => {
	const { app } = await import("./app")
	app(config)(req, res, next)
})

server.listen(9000)
