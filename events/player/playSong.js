const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: "Currently playing a Track",
          iconURL: "https://i.ibb.co/5v1h4HY/arox-5.png",
          url: "https://discord.gg/9UBwpGd3CK",
        })
        .setDescription(
          `\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`
        )
        .setImage(queue.songs[0].thumbnail)
        .setColor("#FF0000")
        .setFooter({ text: "More info - Use /help command [Arox]" });

      queue?.textChannel?.send({ embeds: [embed] }).catch((e) => {});
    }
  }
};
