const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./dha.js')
nocache('../dha.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('I AM KYURA', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ SOURCE CODE INI DI RECODE OLEH HRUTZOFFC\nDENGAN AUTHOR ZERO YT7 ]\n\n', 'orange'), color('\n======TERIMAKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•KIRA-MASTER\n•HRUTZOFFC\n•KURRXD\n•NINO\n•IKYADS\n•KurrXd\n•DAPPAUHUY\n•DAN CREATOR BOT LAINNYA', 'yellow'))
	console.log(color('\n\nSARAN JANGAN DI JUAL ULANG BRO\nKALAU ADA YG MINTA SURUH CHAT SAYA\nWA DEVELOPER 6282322153431', 'pink'))
	console.log(color('\n\n[ SAYA DOAKAN YANG SUBSCRIBE LANCAR, ANTI ERROR PAS RECODE DAN YG TIDAK, YA TAU LAH AKIBAT NYA', 'red'))
	dha.browserDescription = ["KYURA BOTZ", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCANLAH BRO KAN LU OWNER GUA SEKARANG'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ ZERO YT7 ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "K",
    "Ki",
    "Kir",
    "Kira",
    "Kira",
    "Kira G",
    "Kira GA",
    "Kira GAN",
    "Kira GANT",
    "Kira GANTE",
    "Kira GANTEN",
    "Kira GANTENG",
    "Kira GANTENG B",
    "Kira GANTENG BA",
    "Kira GANTENG BAN",
    "Kira GANTENG BANG",
    "Kira GANTENG BANGE",
    "Kira GANTENG BANGET",
    "Kira GANTENG BANGET A",
    "Kira GANTENG BANGET AN",
    "Kira GANTENG BANGET ANJ",
    "Kira GANTENG BANGET ANJI",
    "Kira GANTENG BANGET ANJIR",
    "Kira GANTENG BANGET ANJIR, B",
    "Kira GANTENG BANGET ANJIR, BT",
    "Kira GANTENG BANGET ANJIR, BTW",
    "Kira GANTENG BANGET ANJIR, BTW J",
    "Kira GANTENG BANGET ANJIR, BTW JA",
    "Kira GANTENG BANGET ANJIR, BTW JAN",
    "Kira GANTENG BANGET ANJIR, BTW JANG",
    "Kira GANTENG BANGET ANJIR, BTW JANGA",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN J",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JU",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUA",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL S",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC I",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC IN",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI C",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI CO",
    "Kira GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI COK"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ KYURA BOTZ ]', 'yellow'), color('BOT SUDAH AKTIF  SELAMAT MENGGUNAKAN'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./dha.js')(dha, message)
	})
}

starts()