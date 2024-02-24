const db = require("../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "stop",
  description: "Stops the music.",
  permissions: "0x0000000000000800",
  options: [],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing) {
        return interaction.reply({
          content: "⚠️ No music playing!!",
          ephemeral: true,
        });
      }

      queue.stop(interaction.guild.id);

      const embed = new EmbedBuilder()
        .setColor("#f1002c")
        .setAuthor({
          name: "Music Stopped",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription("**The journey stops, but the rhythm lives on.**");

      return interaction.reply({ embeds: [embed] });
    } catch (e) {
      console.error(e);
    }
  },
};
