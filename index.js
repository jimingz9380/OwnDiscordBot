// Import our library and custom files
const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

// Run handleMessage() whenever a new message sent
client.on("message", handleMessage);

// Replace with your own initials!
const prefix = "!NV";
function handleMessage(message) {
    
// Check if a bot sent the message
    if (message.author.bot == true) {
        return;
    }

// Check that message starts with our prefix
    if (message.content.startsWith(prefix) == false){
        return;
    }

// Add your own code HERE!
//"!INV Hot" -->
let arg = message.content.split(" ")
if (arg[1] == "hot"){
    message.reply("Cold!");
}

if (arg[1] == "andy"){
    message.channel.send("");
}
}
client.login(config.token);