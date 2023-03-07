const { SlashCommandBuilder } = require('discord.js');

const sheepish = [
    "'Baaaaaaaa'",
    "'BaaAAAaaAaa'",
    "'BaaaaaAAAaaaAa'",
    "'BaaAaAaa'",
    "'BaaaAAAaaaaaaAAaAaAAaa'",
    "'BaaaaAAAAAAAAAa'",
    "'BaaAaaaaaAaa'",
    "'BAAaaaAAaa'",
];

const translate = [
    "'Hello'!",
    "'How are you?'",
    "'Where is the restroom?'",
    "'How is the grass?'",
    "'Good morning!'",
    "'Good night!'",
    "'Good afternoon!'",
    "'I love you!'",
    "'How many times have you?'",
    "'Where are you?'",
    "'Eat more chicken, lmao.'",
    `'My name is!`,
    "'I don't speak Sheepish!'",
    "'Decay exists as an extant form of life.'",
    "'Red!'",
    "'Orange!'",
    "'Yellow!'",
    "'Green!'",
    "'Blue!'",
    "'Purple!'",
    "'Pink!'",
];

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lessons')
		.setDescription('Sheepish Lessons'),
	async execute(interaction) {
        let randomOne = Math.floor(Math.random() * sheepish.length);
        let randomTwo = Math.floor(Math.random() * translate.length);
		await interaction.reply(`${interaction.user.username}, your word of the day is ${sheepish[randomOne]}, which means ${translate[randomTwo]}`);
	},
};