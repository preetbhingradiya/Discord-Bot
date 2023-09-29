import { Client, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const PREFIX = "$";

client.on("ready", () => {
  console.log(`${client.user.username} has logged in`);
});

client.on("messageCreate", (message) => {
  console.log(`[${message.author.tag}]: ${message.content}`);
  if (message.author.bot) return;
  message.reply({
    content: "Hii from Bot",
  });
  if (message.content.startsWith(PREFIX)) {
    const [CMD_NAME,...arg] = message.content.substring(PREFIX.length).split(/\s+/);
    if(CMD_NAME==="kick"){
      if(arg.length===0) return message.reply("Please Provide An Id")
      const member=message.guild.members.cache.get(arg[0])
      if(member){
        member.kick()
        .then((member)=>message.channel.send(`${member} was kicked.`))
        .catch(()=>message.channel.send("I can not kick that user"))
      }
      else{
        message.channel.send(`The member is not found.`)
      }
    }
  }
});

client.login(process.env.DISCORD_BOT_TOKEN);
