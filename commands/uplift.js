const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('uplift')
		.setDescription('Are you okay?'),
	async execute(interaction) {
		await interaction.reply(`${interaction.user.username}, you've got this. I know things get hard sometimes, but never forget; you didn't come this far to only come this far. So let's keep going. It only gets better from here.`);
	},
};