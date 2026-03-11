const express = require('express');
const { createServer } = require('http');

const app = express();
const server = createServer(app);
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
const packageInfo = require('../package.json');

global.nimaInstance = null;

app.all('/', (req, res) => {
	if (process.send) {
		process.send('uptime');
		process.once('message', (uptime) => {
			res.json({
				bot_name: packageInfo.name,
				version: packageInfo.version,
				author: packageInfo.author,
				description: packageInfo.description,
				uptime: `${Math.floor(uptime)} තත්පර`
			});
		});
	} else res.json({ error: 'ක්‍රියාවලිය (Process) IPC සමඟ ධාවනය නොවේ' });
});

app.all('/process', (req, res) => {
	const { send } = req.query;
	if (!send) return res.status(400).json({ error: 'යොමු කිරීමට අවශ්‍ය විමසුම (query) ඇතුළත් කර නැත' });
	if (process.send) {
		process.send(send)
		res.json({ status: 'යවන ලදී (Sent)', data: send });
	} else res.json({ error: 'ක්‍රියාවලිය (Process) IPC සමඟ ධාවනය නොවේ' });
});

app.all('/chat', (req, res) => {
	const { message, to } = req.query;
	if (!message || !to) return res.status(400).json({ error: 'පණිවිඩය හෝ යොමු කළ යුතු ලිපිනය ඇතුළත් කර නැත' });
	res.json({ status: 200, mess: 'තවමත් ආරම්භ වී නොමැත' })
});

app.get('/pair', async (req, res) => {
	const { number } = req.query;
	if (!number) return res.status(400).json({ status: false, message: 'අංකය (number) ඇතුළත් කර නැත. උදා: /pair?number=947xxxxxxxx' });

	const nima = global.nimaInstance;
	if (!nima) return res.status(503).json({ status: false, message: 'Bot තවම සූදානම් නැත. ටිකක් රැඳෙන්න.' });

	if (nima.authState?.creds?.registered) {
		return res.status(400).json({ status: false, message: 'Bot දැනටමත් registered. Pair code අවශ්‍ය නැත.' });
	}

	try {
		const cleanNumber = number.replace(/[^0-9]/g, '');
		const code = await nima.requestPairingCode(cleanNumber);
		const formatted = code?.match(/.{1,4}/g)?.join('-') || code;
		return res.json({
			status: true,
			message: 'Pair code ලැබුණා! WhatsApp > Linked Devices > Link with phone number හි ඇතුළත් කරන්න.',
			number: cleanNumber,
			code: formatted,
			expires: '60 seconds'
		});
	} catch (e) {
		return res.status(500).json({ status: false, message: 'Pair code ගැනීමට අසමත් විය.', error: e.message });
	}
});

module.exports = { app, server, PORT };
