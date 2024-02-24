const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: "Added To Queue",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(`<@${song.user.id}>, **${song.name}**`)
        .setColor("#14bdff")
        .setFooter({ text: "Use /queue for more Information" });
      queue?.textChannel?.send({ embeds: [embed] }).catch((e) => {});
    }
  }
};
