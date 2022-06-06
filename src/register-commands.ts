import { SlashCommandBuilder } from '@discordjs/builders'
import { REST } from '@discordjs/rest'
import { Routes } from 'discord-api-types/v9'
import config from '../config.json' assert { type: 'json' }

const commands = [
  new SlashCommandBuilder().setName('areyousentient').setDescription('Is LASABot sentient?')
]
  .map(command => command.toJSON())

const rest = new REST({ version: '10' }).setToken(config.token)

rest.put(Routes.applicationGuildCommands('624434172773138474', config.guildId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error)
