const db = require("../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "pause",
  description: "Stops playing the currently playing music.",
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

      const success = queue.pause();

      const embed = new EmbedBuilder()
        .setColor("#7645fe")
        .setAuthor({
          name: "Song Paused",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(
          success
            ? "**The music has been Paused for a moment!!**"
            : "❌ Command Error: Unable to pause song"
        );

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
