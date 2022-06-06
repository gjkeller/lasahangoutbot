import { Client, Intents } from 'discord.js'
import config from '../config.json' assert { type: 'json' }

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
  console.log('Bot is ready!')
})

client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === 'areyousentient') {
    await interaction.reply('Maybe..?')
  }
})

client.login(config.token)
