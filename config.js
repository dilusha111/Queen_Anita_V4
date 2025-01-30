require('dotenv').config(); 

global.owner = process.env.OWNER_NUMBER.split('94770080582'); 
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "chuti_doni";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";
global.autoTyping = process.env.AUTO_TYPING === 'true'; 
global.autoRecord = process.env.AUTO_RECORD === 'true';
global.autoViewStatus = process.env.AUTO_VIEW_STATUS === 'true';
global.AUTOSTATUS_REACT = process.env.AUTOSTATUS_REACT === 'true';
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "☠";

global.LEVELUP = process.env.LEVELUP === 'true';

global.ANTIVIEWONCE = process.env.ANTIVIEWONCE === 'true';

global.roles = {
    1: "Novice",
    3: "Learner",
    5: "Apprentice",
    8: "Magician",
    10: "Wizard",
    15: "Sorcerer",
    20: "Grandmaster",
    25: "Legend",
};

global.sudoUsers = process.env.SUDO_USERS.split('{"noiseKey":{"private":{"type":"Buffer","data":"qKo2E9413i28fAqNE6khfKUzRwAlnnjsj0sRIhlr2Xo="},"public":{"type":"Buffer","data":"vIxmcnS8cQ/S3tnc3kNq98NEmObMKYaBynpRNZV+eRg="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"KJaL4g7N3yRhxSVDGVIQGzvzAd0lT+OnYaYGzNpZlXI="},"public":{"type":"Buffer","data":"HYvEjHsayzlNyZT1KYrcq0aSpvhDmJqXtREUUmHQ8ls="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"6Dh9uXmqdHLB11401VPQ7o/DyRYjBP20kPk9KVp1FWo="},"public":{"type":"Buffer","data":"ncVnHeYTEe9Am6XcwM+IZ4tCEb3UvhqKte2bMmA3ymE="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"4BCJU2VXPk0i5vytW2bPD3xZd10sU78Tj/1gp0x5WHg="},"public":{"type":"Buffer","data":"izqQXD9h3AkzeLUSGfbMBLnT4g66cEpuKYGiwnQT9WU="}},"signature":{"type":"Buffer","data":"zHQiWJt/7fXI9eeXJgwsfzrCY/ENhqrowNfYPFY33c5pihpXU62DSerUiCMAb0+88O0kohSw0xP3FZ6991ckBg=="},"keyId":1},"registrationId":144,"advSecretKey":"SjfvWHiMm0u6PUU3yQSZg0M3yt2cVf3Kt98fMuk4Vrw=","processedHistoryMessages":[{"key":{"remoteJid":"94770080582@s.whatsapp.net","fromMe":true,"id":"E04D6775C1D23D93BADCB66F3EDFE6E4"},"messageTimestamp":1738211962},{"key":{"remoteJid":"94770080582@s.whatsapp.net","fromMe":true,"id":"B438529B46CA4C04880D824B07448E6F"},"messageTimestamp":1738211964}],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"deviceId":"Cq_-IYMUSwmzU1RJHdrJoQ","phoneId":"fa8c5a87-5935-4a16-9cf5-63c0b477f884","identityId":{"type":"Buffer","data":"yRJTcm3HA4gnov8nOdPqlKqDOZk="},"registered":true,"backupToken":{"type":"Buffer","data":"vHwbBCcSgk9auDRVbpp+3IUBitU="},"registration":{},"pairingCode":"FK7DEC6D","me":{"id":"94770080582:1@s.whatsapp.net"},"account":{"details":"CKGrwfoCEOuE7LwGGAEgACgA","accountSignatureKey":"utb5NHHFrT0iaqR8ykLPitt8Q4XczELUtohaZErRIz8=","accountSignature":"QYZ4YXez0AH6PRikZQWmYV9WKsSarR2IF0W8PpsnbkmCXmHqPfKZJu3A2sZ5KbQeO4mI3lDM4MwhmJXJH0ynCw==","deviceSignature":"Ddfpd7BntEDJLxrInQGoQRQCxYcBU/b8JffEZ9kjXBmIv7/Es5hXOboVJGdlf/j+qRXsp14vTXscrqGRBagLDQ=="},"signalIdentities":[{"identifier":{"name":"94770080582:1@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"BbrW+TRxxa09ImqkfMpCz4rbfEOF3MxC1LaIWmRK0SM/"}}],"platform":"android","lastAccountSyncTimestamp":1738211960}').map(user => `${user}@s.whatsapp.net`); 

global.public = process.env.PUBLIC === 'true';

global.ANTIDELETE = process.env.ANTIDELETE === 'true';
global.unavailable = process.env.UNAVAILABLE === 'true';
global.available = process.env.AVAILABLE === 'true';
global.autoreadmessages = process.env.AUTO_READ_MESSAGES === 'true';
global.chatbot = process.env.CHATBOT === 'true';
global.autoreact = process.env.AUTO_REACT === 'true';

global.WELCOME = process.env.WELCOME === 'true';

global.prefix = process.env.PREFIX || '.';

global.autobio = process.env.AUTO_BIO === 'true';

global.ANTICALL = process.env.ANTICALL === 'true';

global.antilink = process.env.ANTILINK === 'true';
global.antilinkkick = process.env.ANTILINK_KICK === 'true';
global.antilinkwarn = process.env.ANTILINK_WARN === 'true';

global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
