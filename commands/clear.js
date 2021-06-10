module.exports = {
  name: 'clear',
  description: 'clearing messages',
  async execute(message,args){
    if(!args[0])
      return message.reply('please enter the number of messages you want to clear');
    if(isNaN(args[0]))
      return message.reply('1. drink water 2. eat something 3. enter a real number');
    if(args[0] > 100)
      return message.reply('you cant delete more than 100 messages');
    if(args[0] < 1)
      return message.reply('atleast delete 1 message');

    await message.channel.messages.fetch({limit: args[0]}).then(messages => {
      message.channel.bulkDelete(messages);
    });

  }

};
