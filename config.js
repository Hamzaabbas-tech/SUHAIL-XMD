const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_49_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxMixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTMxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODMsXG4gICAgICAgIDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDQyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTksXG4gICAgICAgIDY4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICA2MixcbiAgICAgICAgNzcsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzNixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjA2LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgODgsXG4gICAgICAgIDM4LFxuICAgICAgICAzNCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NixcbiAgICAgICAgODAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyLFxuICAgICAgICA3NCxcbiAgICAgICAgNixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICA2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTksXG4gICAgICAgIDMzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNeitrS2dDRXVLZ1BSNmhhM1hGVEhWV2l4Ym16Um9IaDJCTDg3TXdaMDA0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJyWGRBX29uWVRUS0JpZEtKMlFuRUxRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjdkZDRkZmYxLTgyZTctNDdlOS1iMTBjLTNjNGEzMjU3YjYyYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODIsXG4gICAgICAyMTMsXG4gICAgICAyMzcsXG4gICAgICAxODYsXG4gICAgICAxNDIsXG4gICAgICAyNDQsXG4gICAgICAxMjEsXG4gICAgICAxODUsXG4gICAgICAxMDMsXG4gICAgICA4NyxcbiAgICAgIDksXG4gICAgICA1NCxcbiAgICAgIDEwMixcbiAgICAgIDIxMCxcbiAgICAgIDE3OSxcbiAgICAgIDI0LFxuICAgICAgMTY5LFxuICAgICAgMjE2LFxuICAgICAgMTg1LFxuICAgICAgMTIzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgxLFxuICAgICAgMTIwLFxuICAgICAgMjQ2LFxuICAgICAgMTQ4LFxuICAgICAgNjIsXG4gICAgICAyMDIsXG4gICAgICAyMjYsXG4gICAgICAxNjYsXG4gICAgICAyNTIsXG4gICAgICAxMjQsXG4gICAgICAyMzQsXG4gICAgICAxMjcsXG4gICAgICAyMDgsXG4gICAgICA5MSxcbiAgICAgIDE3MCxcbiAgICAgIDE0NixcbiAgICAgIDQxLFxuICAgICAgNTYsXG4gICAgICA3LFxuICAgICAgODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOEFINTI5RTJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5MTYxOTY5NzoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjU1NDkwNjA5MTI3NjY1OjIxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tXWG1QQUVFTzdEdmJnR0dBb2dBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicW5TMEE5WVdqZnZTWkdvbndvM3RyMEMzak12TWdpRVQ2YXRQU3k5SFR3OD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ5dERVcXVVVWcwSzllbEhzY3F6bG1vTWVncEdLOUlOTE8wKzdkRkp1NzNpdjFPeEVkZFBNK0d4c0NUTHNqcDRzNlhiSmdQZmJsS0RhSTJiZlNZSW5EQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJTT3hqZm9FSVF6eWx2Mmh6RTMvbHNRRVFIU2FoazFhVDNTbGNqYnJIcWxCTnBkVlBMRjJhekQzTS9YcDJmZUZPME5GUzcyelo1L2l0cjBwNmtzWW1oZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMwOTE2MTk2OTc6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyOTA2MTM2MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZqd1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRmp3Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiS0QyVGlCQXd3UFUvS1JCTXQvWkZtSFkvUG5FenFPQ2p3ZmJlaCtJczU3UT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMzA5MDE5MDQxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Hamzu ka bot",
  ownername:process.env.OWNER_NAME|| "Hamzu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
