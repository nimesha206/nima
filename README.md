<div align="center">

<img src="src/media/nima.png" alt="Miss Shasikala Bot" width="150" style="border-radius: 50%"/>

# 🌸 Miss Shasikala WhatsApp Bot

> Node.js සහ Baileys මත ගොඩනගන ලද ශ්‍රී ලාංකික WhatsApp Bot එකක්

<a href="https://github.com/nimesha206/nimabw/watchers"><img src="https://img.shields.io/github/watchers/nimesha206/nimabw?label=Watchers&color=green&style=flat-square"/></a>
<a href="https://github.com/nimesha206/nimabw/network/members"><img src="https://img.shields.io/github/forks/nimesha206/nimabw?label=Forks&color=blue&style=flat-square"/></a>
<a href="https://github.com/nimesha206/nimabw/stargazers"><img src="https://img.shields.io/github/stars/nimesha206/nimabw?label=Stars&color=yellow&style=flat-square"/></a>
<a href="https://github.com/nimesha206/nimabw/issues"><img src="https://img.shields.io/github/issues/nimesha206/nimabw?label=Issues&color=success&style=flat-square"/></a>
<a href="https://github.com/nimesha206/nimabw/pulls"><img src="https://img.shields.io/github/issues-pr/nimesha206/nimabw?label=PullRequest&color=success&style=flat-square"/></a>

[![WhatsApp Channel](https://img.shields.io/badge/WhatsApp%20Channel-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://whatsapp.com/channel/0029Vb68g1c3LdQLQDkbAQ3M)
[![MIT License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](https://choosealicense.com/licenses/mit/)

</div>

---

## ✨ විශේෂාංග (Features)

| කොටස | විස්තරය |
|------|---------|
| 🤖 Bot | Auto reply, pairing code, QR login |
| 👥 Group | Admin tools, anti-spam, welcome messages |
| 🔍 Search | Google, Wikipedia, weather සහ තවත් |
| 📥 Download | **YouTube MP3/MP4** (16MB limit සමග), TikTok, Instagram |
| 🛠️ Tools | Sticker maker, image editor, QR generator |
| 🧠 AI | ChatGPT, image generation |
| 🎮 Game | TicTacToe, Chess, Quiz සහ තවත් |
| 😄 Fun | Memes, jokes, random content |
| 👑 Owner | Full bot control commands |

---

## 📋 අවශ්‍යතා (Requirements)

| Software | Version |
|----------|---------|
| **Node.js** | v20 හෝ ඊට ඉහළ |
| **Git** | ඕනෑම version |
| **yt-dlp** | නවතම version (YouTube download සඳහා) |
| **ffmpeg** | ඕනෑම version |
| **Python 3** | yt-dlp සඳහා |

---

## 🚀 ස්ථාපනය (Installation)

### 📱 Termux (Android) — නිර්දේශිතයි

```bash
# 1. Packages update කරන්න
pkg update && pkg upgrade -y

# 2. අවශ්‍ය packages install කරන්න
pkg install git nodejs-lts python ffmpeg imagemagick -y

# 3. yt-dlp install කරන්න (YouTube download සඳහා අත්‍යවශ්‍යයි)
pip install yt-dlp

# 4. Repository clone කරන්න (username/password නොඉල්ලයි)
git clone https://github.com/nimesha206/nima.git
cd nimabw

# 5. Node packages install කරන්න
npm install --legacy-peer-deps

# 6. Bot start කරන්න
node start.js
```

> ⚠️ **`git clone` username/password ඉල්ලනවා නම්:**
> Repository එක **Public** කරන්න — GitHub → Settings → General → Danger Zone → Change visibility → Public
> හෝ HTTPS වෙනුවට token use කරන්න:
> ```bash
> git clone https://<your-token>@github.com/nimesha206/nimabw.git
> ```

#### 🔄 දැනටමත් install කළා නම් (update කිරීමට):

```bash
cd ~/nimabw
git pull origin main
pip install -U yt-dlp
node start.js
```

#### 📵 Termux background එකේ රඳවා ගැනීමට:

```bash
# Battery optimization off කරන්න
# Settings → Apps → Termux → Battery → Unrestricted

# Wake lock (phone sleep වැටුනත් run වෙනවා)
termux-wake-lock
node start.js
```

---

### 💻 Ubuntu / VPS / SSH

```bash
# 1. System packages install කරන්න
sudo apt update && sudo apt upgrade -y
sudo apt install git nodejs npm python3 python3-pip ffmpeg imagemagick -y

# 2. yt-dlp install කරන්න
pip3 install yt-dlp

# 3. Repository clone කරන්න
git clone https://github.com/nimesha206/nima.git
cd nimabw

# 4. Node packages install කරන්න
npm install

# 5. Bot start කරන්න
npm start
```

---

### 🤖 ස්වයංක්‍රීය ස්ථාපනය (Auto Install)

```bash
git clone https://github.com/nimesha206/nima.git
cd nimabw
bash install.sh
```

> `install.sh` මගින් ඔබේ OS හඳුනාගෙන සියලු dependencies ස්වයංක්‍රීයව install කරනු ලැබේ.

---

### ☁️ Heroku Deploy

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/nimesha206/nimabw)

| Buildpack | Link |
|-----------|------|
| Node.js | `heroku/nodejs` |
| FFmpeg | [jonathanong/heroku-buildpack-ffmpeg-latest](https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest) |
| ImageMagick | [DuckyTeam/heroku-buildpack-imagemagick](https://github.com/DuckyTeam/heroku-buildpack-imagemagick) |

---

## ⚙️ වින්‍යාස කිරීම (Configuration)

සියලු settings පිහිටා ඇත්තේ **[`settings.js`](settings.js)** හි.

```js
// අයිතිකරු අංකය (94 සමග දේශ කේතය)
global.owner = ['947xxxxxxxxxx']

// Bot නම
global.botname = 'Miss Shasikala'
global.author = 'Nimesha'

// Command prefix
global.listprefix = ['!', '.', '+']

// Pairing Code (true = pairing code, false = QR code)
global.pairing_code = true
global.number_bot = '947xxxxxxxxxx'

// Free user limits
global.limit.free = 20
global.money.free = 10000
```

> ⚡ `settings.js` හි කරන වෙනස්කම් bot restart නොකර **ස්වයංක්‍රීයව** apply වේ.

---

## ▶️ Bot ක්‍රියාත්මක කිරීම

```bash
npm start
# හෝ
yarn start
```

Bot start වූ පසු **QR Code** ස්කෑන් කරන්න හෝ **Pairing Code** භාවිතා කරන්න.

---

## 🗂️ Project Structure

```
nimabw/
├── index.js          # WhatsApp connection & event handler
├── nima.js           # සියලු commands (main bot logic)
├── settings.js       # Bot configuration
├── start.js          # Entry point
├── install.sh        # Auto installer script
├── lib/
│   ├── scraper.js    # YouTube/media downloader (yt-dlp)
│   ├── converter.js  # Media conversion (ffmpeg)
│   ├── function.js   # Helper functions
│   ├── uploader.js   # File uploader
│   └── ...
├── src/
│   ├── message.js    # Message handler
│   ├── database.js   # Database manager
│   ├── antispam.js   # Anti-spam system
│   └── server.js     # Express web server
└── database/
    └── temp/         # Temporary download files
```

---

## 🧩 නව Command එකක් එක් කිරීම

`nima.js` හි `switch (command)` කොටස ඇතුළේ:

```js
case 'ping': {
  m.reply('pong 🏓')
}
break
```

---

## ⚠️ YouTube Download ගැන සටහන

YouTube MP3/MP4 download සඳහා **`yt-dlp`** භාවිතා කෙරේ.

- ✅ WhatsApp audio limit: **16MB** (ඊට වැඩි නම් error message එකක් ලැබේ)
- ✅ Region-blocked videos සඳහා `tv_embedded` client use කෙරේ
- 🔄 yt-dlp update කිරීමට: `pip install -U yt-dlp`

---

## 👥 දායකත්වය (Contributors)

| නම | භූමිකාව |
|----|---------|
| [Nimesha](https://github.com/nimesha206) | නිර්මාණකරු සහ ප්‍රධාන developer |
| [Shashikala](https://github.com/nimesha206) | API සේවා |

---

## 📞 සහාය (Support)

- 💬 [WhatsApp](https://wa.me/94726800969)
- 📢 [WhatsApp Channel](https://whatsapp.com/channel/0029Vb68g1c3LdQLQDkbAQ3M)

---

<div align="center">

**නිර්මාණය කළේ [Nimesha Madhushan](https://github.com/nimesha206) විසිනි** 🌸

බලපත්‍රය: [MIT](LICENSE)

</div>
