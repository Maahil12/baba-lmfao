const db = require("../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "resume",
  description: "Start paused music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue) {
        return interaction.reply({
          content: "⚠️ Queue is empty!!",
          ephemeral: true,
        });
      }

      if (!queue.paused) {
        return interaction.reply({
          content: "⚠️ No paused music!!",
          ephemeral: true,
        });
      }

      const success = queue.resume();

      const embed = new EmbedBuilder()
        .setColor("#7645fe")
        .setAuthor({
          name: "Song Resumed",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(
          success
            ? "**The music springs back to life!!**"
            : "❌ Error: Unable to resume song"
        );

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
