const db = require("../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "clear",
  description: "Clears the music queue.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    const queue = client.player.getQueue(interaction.guild.id);

    try {
      if (!queue || !queue.playing) {
        return interaction.reply({
          content: "⚠️ No music playing!!",
          ephemeral: true,
        });
      }

      if (!queue.songs[0]) {
        return interaction.reply({
          content: "❌ Queue is empty!!",
          ephemeral: true,
        });
      }

      await queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor("#3498db")
        .setAuthor({
          name: "Cleared List",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(
          "**Queue cleared! Be Ready for a new musical journey.**"
        );

      interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
