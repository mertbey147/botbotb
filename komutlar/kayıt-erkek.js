const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_NICKNAMES"))
    return message.channel.send(
      `❌ Bu Komutu Kullanabilmek için \`İsimleri Yönet\` Yetkisine Sahip Olmalısın!`
    );
  let member = message.mentions.members.first();
  let isim = args.slice(1).join(" ");
  let yas = args.slice(1).join(" ");
  if (!member) return message.channel.send(":x: Bir Üye Etiketlemelisin!");
  if (!isim) return message.channel.send(":x: Bir İsim Yazmalısın!");
  member.removeRole('793785269455159296')
  member.addRole('793785268821950484')
const embed = new Discord.RichEmbed()


      .addField(`**🏷 Kayıt Yapıldı 🏷**`,
      `\n**🔸️Kayıt Edilen Kullanıcı:** ${member.user} \n🔸️**Kayıt Eden Yetkili:** \`${message.author.username}\``)
client.channels.get('794108450056437771').send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["erkek", "e"],
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "ArdaDemr Kayıt Sistemi",
  usage: "ArdaDemr Kayıt Sistemi"
};