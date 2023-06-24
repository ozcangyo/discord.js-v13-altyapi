const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Öylesine aptalca cevap veriyor'),

  async execute(interaction) {
    await interaction.reply('Pong!');
  },
};
