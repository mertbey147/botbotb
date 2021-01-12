const Discord = require("discord.js");
const db = require('quick.db');
exports.run = (client, message, args) => {
  const log = message.guild.channels.find(c => c.id === "794108450056437771"); //buraya kayıt log id koyun
  const tag = "𓂀";//YAZMAK İSTERSENİZ TAGINIZ ( BOŞ BIRAKABİLİRSİNİZ )
  const dogrulandi = client.emojis.find(emoji => emoji.name === "emoji_53"); // örn (emoji => emoji.name === "siyah");
  if(!message.member.roles.array().filter(r => r.id === "794107381239906335")[0]) { //buraya kayıt sorumlusu rolünün id'sini giriniz. SUNUCU AYARLARINDAN kopyalayın.
    return message.channel.send("Bu işlemi sadece Ayarlanmış Kayıt Sorumluları gerçekleştirebilir.");
  } else {
    let member = message.mentions.users.first() || client.users.get(args.join(' '))
      if(!member) return message.channel.send("Bir kullanıcı girin.")
    const c = message.guild.member(member)
    const nick = args[1];
    const yas = args[2];
      if(!nick) return message.channel.send("Bir isim girin.")
      if(!yas) return message.channel.send("Bir yaş girin.")
    c.setNickname(`🎄 ${nick} - ${yas}`)
    const embed = new Discord.RichEmbed()
    .setDescription(`**<@${c.user.id}>** kişinin yeni adı **🎄 ${nick} - ${yas} !**`)
    .setColor("0xf3f5a7")
    log.send(embed)
    message.react(dogrulandi)
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["isim", "nick"],
  permLevel: 0
};
exports.help = {
  name: "nick", 
  name: "isim",
  description: "",
  usage: ""
};
   