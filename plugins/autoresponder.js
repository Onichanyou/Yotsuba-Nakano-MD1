import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]

if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen8, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: 'ꪹ͜𓂃͡𝐘𝐨𝐭𝐬𝐮𝐛𝐚 𝐍𝐚𝐤𝐚𝐧𝐨𓏲੭', body: 'Powered By: Diego.Ofc', sourceUrl: `https://github.com/Diego-YL-177/Yotsuba-Nakano-MD`, thumbnail: imagen6}}})}

return !0 }
export default handler
