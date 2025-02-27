const {readEnv} = require('../lib/database')
const {cmd, commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu",
    alias: ["panel", "penal", "list", "allmenu"],
    react: "♻️",
    desc: "Check menu all",
    category: "main",
    filename: __filename
}, async (conn, mek, m, {from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try {
        // RAM usage
        const totalRAM = Math.round(require('os').totalmem() / 1024 / 1024); // Total RAM in MB
        const usedRAM = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2); // Used RAM in MB
        const freeRAM = (totalRAM - parseFloat(usedRAM)).toFixed(2); // Free RAM in MB

        let status = `*✸𝘞𝘌𝘓𝘊𝘖𝘔𝘌 𝘛𝘖 𝘝𝘐𝘔𝘈 𝘔𝘋 𝘜𝘚𝘌𝘙 𝘉𝘖𝘛✸*

> *Uptime:* ${runtime(process.uptime())}

> *Used*: ${usedRAM} MB

> *Free*: ${freeRAM} MB

> *Total*: ${totalRAM} MB

> *Owner:* 𝚅𝙸𝙼𝙰𝙼𝙾𝙳𝚂

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1කින් මකා දමයි.*

> *.𝘚𝘦𝘵𝘵𝘪𝘯𝘨𝘴 > 𝘊𝘖𝘔𝘔𝘈𝘕𝘋 𝘞𝘖𝘙𝘒 𝘖𝘕𝘓𝘠 𝘉𝘖𝘛 𝘖𝘞𝘕𝘌𝘙. 𝘉𝘖𝘛 𝘊𝘜𝘚𝘛𝘖𝘔𝘐𝘡𝘌 𝘚𝘌𝘛𝘛𝘐𝘕𝘎𝘚 𝘊𝘖𝘔𝘔𝘈𝘕𝘋.❄️

මෙම මැසේජ් එකට රිප්ලයි කර අදාල මෙනු එකේ නම්බර් එක ටයිප් කර Send කරන්න ⤵️
┏━━━━━━━━━━━━━━┓
┃╭┈───────────╮

> 1 💥*𝘔𝘈𝘐𝘕 𝘔𝘌𝘕𝘜*⤵💥

> 2 💥*𝘎𝘙𝘖𝘜𝘗 𝘔𝘌𝘕𝘜*⤵💥
 
> 3 💥*𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋 𝘔𝘌𝘕𝘜*⤵💥
 
> 4 💥*𝘖𝘛𝘏𝘌𝘙 𝘔𝘌𝘕𝘜*⤵💥

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛

*✸𝘝𝘐𝘔𝘈 𝘔𝘋 𝘞𝘏𝘈𝘛𝘚𝘈𝘗𝘗 𝘜𝘚𝘌𝘙 𝘉𝘖𝘛✸*`

        // URL of the image you want to include
        const imageUrl = 'https://i.ibb.co/Sns38Lb/IMG-20240917-WA0051.jpg'; // Replace with your actual image URL

        // Send the image with the status as the caption
        const sentMsg = await conn.sendMessage(from, {
            image: { url: imageUrl },
            caption: status
        }, { quoted: mek || null });

setTimeout(async () => {
                    await conn.sendMessage(from, { delete: sentMsg.key });
                }, 60000); // 10 seconds timeout for deletion



        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;
            const selectedOption = msg.message.extendedTextMessage.text.trim();
            
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === sentMsg.key.id) {
                switch (selectedOption) {
                    case '1':
                        reply(`💥𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━┓
┃╭┈────────━──╮

> *_.restart_*
Ex.( .restart )
Bot Restart කරයි✅

> *_.settings_*
Ex. ( .settings )
Botගේ සෙටින් ලබා දෙයි✅

> *_.system_*
Ex.( .restart )
Bot විස්තර ලබා දෙයි✅

> *_.ping_*
Ex. ( .ping )
Bot Speed පෙන්වයි✅

> *_.alive_*
Ex.( .alive )
Bot Online සිටින බව පෙන්වයි✅

> *_.vima_*
Ex. ( .vima )
Bot අයිතිකරුගේ විස්තර ලබා දෙයි✅

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '2':
                        reply(`💥𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━┓
┃╭┈─────━━━━──╮

> *_.add_*
Ex.( .add 94776734030 )
ගෲපයේ නැති සමාජිකයෙක් Add කරයි.

> *_.promote_*
 Ex.( .promote @mention member )
ගෲපයේ සමාජිකයෙක් Admin බල තල ලබාදෙයි.✅

> *_.demote_*
 Ex.( .demote @mention member )
ගෲපයේ සමාජිකයෙක් Admin බල තල ඉවත් කරයි.✅

> *_.setabout_*
 Ex.( .setabout ZAIRO MD )
ගෲපයේ ඇති Bio එක වෙනස් කරයි.✅.

> *_.setname_*
 Ex.( .setname ZAIRO MD )
ගෲපයේ ඇති නම වෙනස් කරයි.✅.

> *_.tagall_*
Ex.( .tagall )
ගෲපයේ සියලුම සමාජිකකයන් එක වර ටැග් කරයි.✅

> *_.grouplink_*
Ex.( .grouplink )
ඔබ සිටින ගෲපයේ ලින්ක් එක ලබා දෙයි.✅

> *_.mute_*
Ex.( .mute )
ගෲපය වසා දමයි.✅ 

> *_.unmute_*
Ex.( .upmute )
ගෲපය නැවත Open කරයි✅ 

> *_.kick_*
Ex.( .kick @9477xxxxxxx )
ගෲපය Tag කරන සාමාජිකයා ඉවත් කරයි.✅ 

> *_.kickall_*
Ex.( .kickall )
ගෲපයේ සියලුම සාමාජිකයන් එකවර ඉවත් කරයි.✅ 

> *_.endgroup_*
Ex.( .endgroup )
ගෲපය අවසාන කර දමයි.✅ 

> *_.delall_*
Ex.( .delall )
ගෲපයේ සියලුම මැසේජ් මකා දමයි.✅ 

> *_.gjid_*
Ex.( .gjid )
ගෲපයේ ලිපිනය ලබා දෙයි.✅ 

> *_.left_*
Ex.( .left )
ගෲපයෙන් ඔබ ඉවත් වෙයි.✅

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '3':
                        reply(`💥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━━━┓
┃╭┈────────━━──╮

> *_.play_*
Ex.( .play <Song name> )
ඔබ ටයිප් කරන සෝන් එකේ Audio එක පමනක් ලබා දෙයි✅

> *_.song_*
Ex.( .song <Type Song Name> )
ඔබ ටයිප් කරන ගීතය බාගත⬇️ කරයි.✅

> *_.video_*
Ex.( .video <Type Video Name> )
ඔබ ටයිප් කරන විඩියෝව බාගත⬇️ කරයි.✅

> *_.fb_*
Ex.( .fb <Type fb video link> )
ඔබ ටයිප් කරන ගීතය බාගත⬇️ කරයි.✅

> *_.tiktok_*
Ex.( .tiktok <Type Tiktok Link> )
ඔබ ටයිප් කරන ටික්ටොක් විඩියෝව බාගත⬇️ කරයි.✅

> *_.mediafire_*
Ex. ( .mediafire <Enter media fire link> )
ඔබගේ Mediafire File එක බාගත⬇️ කරයි✅

> *_.gdrive_*
Ex. ( .gdrive <Enter Google Drive Link> )
Google drive File එක බාගත⬇️ කරයි✅

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    case '4':
                        reply(`💥𝐎𝐓𝐇𝐄𝐑 𝐌𝐄𝐍𝐔💥

🛑 *මෙම පනිවිඩය ස්වයංක්‍රීයව විනාඩි 1 මකා දමයි.*

┏━━━━━━━━━━━━━┓
┃╭┈────━━━━──╮

> *_.ai_*
Ex.( .ai <Hi kohomada> )
Chat gtp ක්‍රියා කරයි✅

> *_.yts_*
Ex. ( .yts <lelena> )
ඔබ ලබා දෙන නමට අදාල විඩියෝ සෝයා දෙයි✅

┃┗━━━━━━━━━━━━┛
┗━━━━━━━━━━━━━━┛`);
                        break;
                    default:
                        reply("Invalid option. Please select a valid menu option (1-4).");
                }
           
setTimeout(async () => {
                    await conn.sendMessage(from, { delete: msg.key });
                }, 60000); // 10 seconds timeout for deletion
 }
        });

    } catch (e) {
        console.log(e)
        reply(`Error: ${e}`)
    }
});

// Delete last 
