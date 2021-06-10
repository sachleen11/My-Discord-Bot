module.exports = {
  name: 'kick',
  description: 'here to kick people',
  execute(message,args){
    if(!args[1])
      message.channel.send("specify who u wanna kick");
    const user = message.mentions.users.first();
    if(user){
      const member = message.guild.member(user);
      if(member){
        member.kick('goodbye, mufatkhor').then(() => {
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          message.reply('I was unable to kick em out');
          console.log(err);
        })
      }
      else{
        message.reply('that user isn\'t in this server');
      }
    }

  }
};
