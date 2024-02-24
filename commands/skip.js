const { ApplicationCommandOptionType, EmbedBuilder } = require("discord.js");
const db = require("../mongoDB");
module.exports = {
  name: "skip",
  description: "Switches the music being played.",
  permissions: "0x0000000000000800",
  options: [
    {
      name: "number",
      description: "mention how many songs you wanna skip",
      type: ApplicationCommandOptionType.Number,
      required: false,
    },
  ],
  voiceChannel: true,
  run: async (client, interaction) => {
    try {
      const queue = client.player.getQueue(interaction.guild.id);
      if (!queue || !queue.playing)
        return interaction
          .reply({ content: "⚠️ No music playing!!", ephemeral: true })
          .catch((e) => {});

      let number = interaction.options.getNumber("number");
      if (number) {
        if (!queue.songs.length > number)
          return interaction
            .reply({
              content: "⚠️ Exceeded current no of songs",
              ephemeral: true,
            })
            .catch((e) => {});
        if (isNaN(number))
          return interaction
            .reply({ content: "⚠️ Invalid Number", ephemeral: true })
            .catch((e) => {});
        if (1 > number)
          return interaction
            .reply({ content: "⚠️ Invalid Number", ephemeral: true })
            .catch((e) => {});

        try {
          let old = queue.songs[0];
          await client.player.jump(interaction, number).then((song) => {
            return interaction
              .reply({ content: `⏯️ Skipped : **${old.name}**` })
              .catch((e) => {});
          });
        } catch (e) {
          return interaction
            .reply({ content: "❌ Queue is empty!!", ephemeral: true })
            .catch((e) => {});
        }
      } else {
        try {
          const queue = client.player.getQueue(interaction.guild.id);
          if (!queue || !queue.playing) {
            return interaction.reply({
              content: "⚠️ No music playing!!",
              ephemeral: true,
            });
          }

          let old = queue.songs[0];
          const success = await queue.skip();

          const embed = new EmbedBuilder()
            .setColor("#3498db")
            .setAuthor({
              name: "Song Skipped",
              iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
              url: "https://discord.gg/9UBwpGd3CK",
            })
            .setDescription(
              success ? ` **SKIPPED** : **${old.name}**` : "❌ Queue is empty!"
            )
            .setTimestamp();

          return interaction.reply({ embeds: [embed] });
        } catch (e) {
          return interaction
            .reply({ content: "❌ Queue is empty!!", ephemeral: true })
            .catch((e) => {});
        }
      }
    } catch (e) {
      console.error(e);
    }
  },
};
