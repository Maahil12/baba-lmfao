const { ApplicationCommandOptionType } = require("discord.js");
const db = require("../mongoDB");

module.exports = {
  name: "owner",
  description: "Get information about bot owner.",
  permissions: "0x0000000000000800",
  options: [],

  run: async (client, interaction) => {
    try {
      const { EmbedBuilder } = require("discord.js");
      const embed = new EmbedBuilder()
        .setColor("#da2a41")
        .setAuthor({
          name: "Owner",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(
          `__**About me**__:\n\n ▶️ Myself Manta aka AR metx. I am a discord bot developer and web developer (kinda). I love playing games, watching one piece and building random shit.\n)`
        )
        .setTimestamp();
      interaction.reply({ embeds: [embed] }).catch((e) => {});
    } catch (e) {
      console.error(e);
    }
  },
};
