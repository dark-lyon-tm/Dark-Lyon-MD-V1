
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'your key',
}


//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = false //auto reading in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//semt menu variants
global.vidmenu = fs.readFileSync("./LyonMedia/theme/Lyon bot.mp4") //gif and video menu

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['94757558130'],['94771825716'] //ur owner number
global.ownername = "X $ M" //ur owner name
global.ytname = "YT: BISA YT" //ur yt chanel name
global.socialm = "GitHub: Darklyon" //ur github or insta name
global.location = "Sri Lanka, Gampaha, Ganemulla" //ur location

//bot bomdy 
global.owner = ['94757558130'],['94771825716']
global.ownertag = '94757558130','94771825716' //ur tag number
global.botname = 'Dark Lyon MD V1🎭' //ur bot name
global.linkz = "https://youtu.be/channel/UC9yYBHDtitW6XiDFi0AMi4g" //your theme url which will be displayed on whatsapp
global.websitex = "https://youtu.be/channel/UC9yYBHDtitW6XiDFi0AMi4g" //ur website to be displayed
global.botscript = 'This is bot repo' //script link
global.reactmoji = "👑" //ur menu react emoji
global.themeemoji = "🖤" //ur theme emoji
global.packname = "DARK LYON MD🎭 " //ur sticker watermark packname
global.author = "Xofiy & maneth" //ur sticker watermark author

//Bot theme media
global.thum = fs.readFileSync("./LyonMedia/theme/lyonpic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./LyonMedia/theme/lyonpic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./LyonMedia/theme/lyonpic.jpg") //ur error pic
global.thumb = fs.readFileSync("./LyonMedia/theme/lyonpic.jpg") //ur thumb pic

//damtabase
global.premium = ['94757558131'],['94771825716'] //ur premium numbers
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.sessionName = 'session.lyon'
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿','*','^','_','-']
global.sp = '⭔'
global.mess = {
    success: 'Done ✓',
    admin: 'This Feature Is Only For Admin!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'This Feature Is Only For Owner!',
    group: 'Feature Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This Feature Is Only For Bot',
    wait: 'In process...',
    linkm: 'Where is the link?',
    error: 'Error!!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate,i dont activate it bro',
    banChat: 'The DARK-LYON-BOT was banned in this group, please contact the owner to unban'
}
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./LyonMedia/theme/lyonpic.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
