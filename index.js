import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`);
    if(message.author.bot) return
    message.reply({
        content:"Hii from Bot"
    });
});

client.on('ready',()=>{
    console.log(`${client.user.username} has logged in`);
})

client.login(process.env.DISCORD_BOT_TOKEN);
