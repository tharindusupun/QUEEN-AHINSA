const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94762175364,")
global.mongodb = process.env.MONGODB_URI || "mongodb://utjaop1dhaw2u436zwkm:ID7a74JFWha1ijLmN7iQ@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bbtkq1sm2exv2vh?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.blockJids = process.env.BLOCK_JID ||'120363165030810524@g.us' ;
global.allowJids = process.env.ALLOW_JID ||'120363165030810524@g.us' ;
global.github = 'https://github.com/tharindusupun/QUEEN-AHINSA'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94762175364'
global.devs = '94762175364';
global.INBOX_BLOCK = 'true'
global.TIMEZONE = 'Asia/Colombo' 
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/928e7e60cc557ca320dff.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐐𝐔𝐄𝐄𝐍 𝐀𝐇𝐈𝐍𝐒𝐀-MD 🧚' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '𝐓𝐇𝐀𝐑𝐈𝐍𝐃𝐔 𝐎𝐅𝐂' : process.env.OWNER_NAME,
  ownernumber: process.env.OWNER_NUMBER === undefined ? '94762175364' : process.env.OWNER_NUMBER,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? '🚨🧚‍♀️𝐐𝐔𝐄𝐄𝐍 𝐀𝐇𝐈𝐍𝐒𝐀:𝐓𝐇𝐀𝐑𝐈𝐍𝐃𝐔 𝐎𝐅𝐂' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝐐𝐔𝐄𝐄𝐍 𝐀𝐇𝐈𝐍𝐒𝐀 𝗠𝗗' : process.env.PACK_INFO.split(";")[1],	
  dl_limit: process.env.DL_SIZE || '350',
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? true : process.env.ALWAYS_ONLINE,
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antibadword : process.env.ANTI_BAD_WORD || 'huththa',
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '212' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? true : process.env.READ_MESSAGE,
  HANDLERS:  process.env.PREFIX === undefined ? ['#','!','.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main',
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  caption :process.env.CAPTION || "  \t🧚 *ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴄʏʙᴇʀ 𝐐𝐔𝐄𝐄𝐍 𝐀𝐇𝐈𝐍𝐒𝐀*",
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
