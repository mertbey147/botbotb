const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "Gokalp 7/24 AKTİF TUTMA İŞLEMİ BAŞARILI");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);

//---------------------------------STRIGA ÇOK TATLI BİRİSİ BEN OLSAM VİDEOLARINA LİKE ATAR KANALINA ABONE OLUR VİDEOSUNA YORUM YAPARDIM BU ARADA---------------------------------\\





//-----------------------GİRENE-ROL-VERME----------------------\\     STG

client.on("guildMemberAdd", member => {
  member.addRole('793785269455159296'); // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
});

//-----------------------GİRENE-ROL-VERME----------------------\\     STG









//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG

client.on("guildMemberAdd", member => {
  const kanal = "794108450056437771"; // HOŞGELİDNİ ATMASI GEREKEN KANALIN İDSİ
  let user = client.users.get(member.id);
  require("moment-duration-format");
    const kurulus = new Date().getTime() - user.createdAt.getTime();
  const embed = new Discord.RichEmbed()

  var kontrol;
if (kurulus < 1296000000) kontrol = '**Hesap Güvenilir Değil.**'
if (kurulus > 1296000000) kontrol = '**Hesap Güvenilir.**'
  moment.locale("tr");
  let log = client.channels.get(kanal);
log.send("Sunucumuza Hoşgeldin" + member + " \n\nHesabını " + moment(member.user.createdAt).format("YYYY DD MMMM dddd hh:mm:ss") + " Önce Oluşturmuşsun. " + kontrol + "\n\nSunucmuzda Kurallarımızı Okumanı Tavsiye Ederiz Çünkü Herkes Kuralları Okundu Olarak Kabul Edilir Ve Ona Göre Ceza İşlemi Yapılır. \n\nSeninle Beraber " + member.guild.memberCount + " Kişiyiz, Tagımızı alarak ` 𓂀 ` bize destek olabilirsin, Ses Odalarına Girerek <@&794107381239906335> Rolündekilere Teyit Verebilirsin. \n")
});

//----------------------------------------------------HOŞ-GELDİN-MESAJI---------------------------------------------------\\     STG










//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG

client.on("guildMemberAdd", member => {
  var moment = require("moment")
  require("moment-duration-format")
  moment.locale("tr")
   var {Permissions} = require('discord.js');
   var x = moment(member.user.createdAt).add(7, 'days').fromNow()
   var user = member.user
   x = x.replace("birkaç saniye önce", " ")
   if(!x.includes("önce") || x.includes("sonra") ||x == " ") {
   var rol = member.guild.roles.get("794108450056437771") // ŞÜPHELİ HESAP ROLÜNÜN İDSİNİ GİRİN
   var kayıtsız = member.guild.roles.get("793785269455159296") // UNREGİSTER ROLÜNÜN İDSİNİ GİRİN
   member.addRole(rol)
   member.removeRole(kayıtsız)
member.user.send('Selam Dostum Ne Yazık ki Sana Kötü Bir Haberim Var Hesabın 1 Hafta Gibi Kısa Bir Sürede Açıldığı İçin Fake Hesap Katagorisine Giriyorsun Lütfen Bir Yetkiliyle İletişime Geç Onlar Sana Yardımcı Olucaktır.')
setTimeout(() => {

        member.removeRole(kayıtsız.id);

}, 1000)


   }
        else {

        }
    });


//-----------------------ŞÜPHELİ-HESAP----------------------\\     STG










//-----------------------TAG-ROL----------------------\\     STG

client.on('userUpdate', async user => {
   let tag = "𓂀"; // TAGINIZ
  let sunucuid = "793781687153983530"; //Buraya sunucunuzun IDsini yazın
  let rol = "794113221886738443"; //TAG ALINCA VERİLECEK ROL İDSİ
  let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
  if (!tag) return;
  if (!rol) return;
  if (!channel) return;
  let member = client.guilds.get(sunucuid).members.get(user.id);
  if (!member) return;
  if (!member.roles.has(rol)) {
    if (member.user.username.includes(tag)) {
      member.addRole(rol)
      const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
    }
  }else{
    if (!member.user.username.includes(tag)) {
      member.removeRole(rol)
      const tagsilme = new Discord.RichEmbed()
      .setColor("RED")
      .setDescription(`<@${user.id}> adlı kişi, ${tag} tagını sildiğinden dolayı <@&${rol}> rolünü kaybetti.`)
      .setTimestamp()
      channel.send(tagsilme)
    }
  }
});

//-----------------------TAG-ROL----------------------\\     STG








//-----------------------TAG-KONTROL----------------------\\     STG

client.on("guildMemberAdd", member => {
let tag = "𓂀"; // TAGINIZ
let sunucuid = "793781687153983530"; // SUNUCUİDSİ
let rol = "794113221886738443"; // TAG ALINCA VERİLECEK ROL İDSİ
let channel = client.guilds.get(sunucuid).channels.find(x => x.name == 'tag-log'); // TAG ALINCA HANGİ KANALA MESAJ ATILACAKSA YAZIN
if(member.user.username.includes("𓂀")){ // TEKRAR TAGINIZI GİRİN
member.addRole("794113221886738443") // TEKRAR TAG ROLÜNÜN İDSİN GİRİN
  const tagalma = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription(`<@${member.id}> adlı kişi **Taglı Sunucumuza Katıldı !**, ${tag} tagını aldığından dolayı <@&${rol}> rolünü kazandı.`)
      .setTimestamp()
      channel.send(tagalma)
}
})

//-----------------------TAG-KONTROL----------------------\\     STG










// YAVAŞ LAN KAÇ TANE ALIYON