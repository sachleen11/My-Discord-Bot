const Discord = require("discord.js");

const client = new Discord.Client();

const prefix = '$';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once('ready',()=>{
  console.log('truth_prevails says hola!');
});

client.on('guildMemberAdd', member=>{
  const channel = member.guild.channels.find(channel => channel.name === "general");
  if(!channel)
    return;
});

client.on('message',message =>{
  if(!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if(command == 'ping'){
    client.commands.get('ping').execute(message,args);
  }
  else if(command == 'clear'){
    client.commands.get('clear').execute(message,args);
  }
  else if(command == 'youtube'){
    message.channel.send('https://www.youtube.com/user/newslaundry')
  }
  else if(command == 'latest newsance'){
    message.channel.send('https://www.youtube.com/watch?v=t-W7kO6i3sg&list=PLpHbno9djTOSaBHKTrtbsKkn6MDUujQxX&ab_channel=newslaundry');
  }
  else if (command == 'kick'){
    client.commands.get('kick').execute(message,args);
  }
  else{
    message.channel.send('i dont know what u want me to do :(')
  }
});

client.login('NzkxNTI5NTUzOTQ3MjYyOTg2.X-QfVw.TKwa7kE0PeW4cndaP8fSZwQ4kkk');
