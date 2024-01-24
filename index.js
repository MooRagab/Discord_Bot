import { Client, GatewayIntentBits } from "discord.js";
export const TOKEN =
  "MTE5OTM3MDc2MzIzMzM5ODg4NQ.G8ft7k.Uz3426oRtzYcGmwPfMCN7L-mlwPUI8Rfw1GBNk";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "Generating Short ID for " + url,
    });
  } else {
    message.reply({
      content: "RAGAB 3ME"
  }
});

client.on("interactionCreate", (interaction) => {
  interaction.reply("PingPong Hehehehe");
});

client.login(TOKEN);
 
