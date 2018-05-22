import { Client } from "discord.js";
const client = new Client();

const a = [1, 2, 3, 4, 2, 1, 2];
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
  if (msg.content === "ping") {
    msg.reply("Pong!");
  }
});

client.login("token");
