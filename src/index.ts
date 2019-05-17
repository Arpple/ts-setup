import discord from "discord.js"
const client = new discord.Client()

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", (msg) => {
  if (msg.content === "ping") msg.reply("Pong!")
})

client.login("MjcyMzcxODg0ODgyOTE5NDI2.XN7Csg.okMUmSO2O3V9X0dHGjGwx0U1xGM")
