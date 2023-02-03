const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sheep')
		.setDescription('Replies with sheep!'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.username}, BaaaAAAaaaAAAaaAaaaaa!`);
	},
};