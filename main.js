const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({
    intents: [
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildBans,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
    ],
   
  });

const prefix = '!';


client.once('ready', () => { 
    console.log('Dee is online!');
});

client.on('messageCreate', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        message.channel.send('pong!')
    } else if(command === 'memekoning'){
        message.channel.send('Vooralsnog Roald, maar kwantiteit over kwaliteit?')
    }
});
 





















client.login(process.env.token);

