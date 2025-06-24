const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const helpMessage = `
╔═══════════════════╗
║  *🤖 ${settings.botName || '𝗛𝗔𝗖𝗞𝗟𝗜𝗡𝗞-𝗫𝗠𝗗'}*  
║   Version: *${settings.version || '2.0.5'}*
║   by ${settings.botOwner || 'HACKLINK TECH.INC'}
║   YT : ${global.ytch}
╚═══════════════════╝

*Available Commands:*

╔═══════════════════╗
🌐 *General Commands*:
║═════════════════╗
║ ➤ .help or .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather
║ ➤ .news
║ ➤ .attp
║ ➤ .lyrics
║ ➤ .8ball 
║ ➤ .groupinfo
║ ➤ .admins 
║ ➤ .vv
║ ➤ .trt
║ ➤ .ss
║ ➤ .jid
╚═══════════════════╝ 

╔═══════════════════╗
👮‍♂️ *Admin Commands*:
║═════════════════╗
║ ➤ .promote 
║ ➤ .demote 
║ ➤ .mute 
║ ➤ .unmute
║ ➤ .del
║ ➤ .kick
║ ➤ .warnings
║ ➤ .warn 
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag 
║ ➤ .tagall
║ ➤ .chatbot
║ ➤ .resetlink
║ ➤ .welcome 
║ ➤ .goodbye 
╚═══════════════════╝

╔═══════════════════╗
🔒 *Owner Commands*:
║═════════════════╗
║ ➤ .mode
║ ➤ .autostatus
║ ➤ .clearsession
║ ➤ .antidelete
║ ➤ .cleartmp
║ ➤ .setpp
║ ➤ .autoreact
╚═══════════════════╝

╔═══════════════════╗
🎨 *Image/Sticker Commands*:
║═════════════════╗
║ ➤ .blur 
║ ➤ .simage 
║ ➤ .sticker
║ ➤ .tgsticke
║ ➤ .meme
║ ➤ .take
║ ➤ .emojimix
╚═══════════════════╝  

╔═══════════════════╗
🎮 *Game Commands*:
║═════════════════╗
║ ➤ .tictactoe 
║ ➤ .hangman
║ ➤ .guess 
║ ➤ .trivia
║ ➤ .answer 
║ ➤ .truth
║ ➤ .dare
╚═══════════════════╝

╔═══════════════════╗
🤖 *AI Commands*:
║═════════════════╗
║ ➤ .gpt 
║ ➤ .gemini 
║ ➤ .imagine 
║ ➤ .flux 
╚═══════════════════╝

╔═══════════════════╗
🎯 *Fun Commands*:
║═════════════════╗
║ ➤ .compliment
║ ➤ .insult 
║ ➤ .flirt 
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character 
║ ➤ .wasted 
║ ➤ .ship 
║ ➤ .simp 
║ ➤ .stupid 
╚═══════════════════╝

╔═══════════════════╗
🔤 *Textmaker*:
║═════════════════╗
║ ➤ .metallic 
║ ➤ .ice
║ ➤ .snow 
║ ➤ .impressive 
║ ➤ .matrix 
║ ➤ .light 
║ ➤ .neon 
║ ➤ .devil 
║ ➤ .purple 
║ ➤ .thunder 
║ ➤ .leaves 
║ ➤ .1917 
║ ➤ .arena
║ ➤ .hacker 
║ ➤ .sand 
║ ➤ .blackpink 
║ ➤ .glitch 
║ ➤ .fire 
╚═══════════════════╝

╔═══════════════════╗
📥 *Downloader*:
║═════════════════╗
║ ➤ .play 
║ ➤ .song 
║ ➤ .instagram 
║ ➤ .facebook
║ ➤ .tiktok 
║ ➤ .video 
║ ➤ .ytmp4 
╚═══════════════════╝

╔═══════════════════╗
💻 *Github Commands:*
║═════════════════╗
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401087525436@newsletter',
                        newsletterName: 'HACKLINK',
                        serverMessageId: -1
                    }
                }
            },{ quoted: message });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363401087525436@newsletter',
                        newsletterName: 'HACKLINK ',
                        serverMessageId: -1
                    } 
                }
            });
        }

        const audioUrls = [
    'https://files.catbox.moe/hpwsi2.mp3',
    'https://files.catbox.moe/xci982.mp3',
    'https://files.catbox.moe/utbujd.mp3',
    'https://files.catbox.moe/w2j17k.m4a',
    'https://files.catbox.moe/851skv.m4a',
    'https://files.catbox.moe/qnhtbu.m4a',
    'https://files.catbox.moe/lb0x7w.mp3',
    'https://files.catbox.moe/efmcxm.mp3',
    'https://files.catbox.moe/gco5bq.mp3',
    'https://files.catbox.moe/26oeeh.mp3',
    'https://files.catbox.moe/a1sh4u.mp3',
    'https://files.catbox.moe/vuuvwn.m4a',
    'https://files.catbox.moe/wx8q6h.mp3',
    'https://files.catbox.moe/uj8fps.m4a',
    'https://files.catbox.moe/dc88bx.m4a',
    'https://files.catbox.moe/tn32z0.m4a'
        ];

        const randomAudioUrl = audioUrls[Math.floor(Math.random() * audioUrls.length)];

        await sock.sendMessage(chatId, {
            audio: { url: randomAudioUrl },
            mimetype: 'audio/mp4'
        }, { quoted: message });
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
