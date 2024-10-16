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
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_05_12_10_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICA4MixcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTQsXG4gICAgICAgIDEzLFxuICAgICAgICA0LFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDIyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDY0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc0LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjM4LFxuICAgICAgICA3LFxuICAgICAgICA2NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDYwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNjksXG4gICAgICAgIDExLFxuICAgICAgICA1MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgODQsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMwLFxuICAgICAgICA4OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAxLFxuICAgICAgICAzNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTMyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MyxcbiAgICAgICAgNTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI2LFxuICAgICAgICA2NixcbiAgICAgICAgMjI1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjE4LFxuICAgICAgICA2LFxuICAgICAgICA1MixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDExLFxuICAgICAgICA1MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDU1LFxuICAgICAgICAxNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyMixcbiAgICAgICAgODksXG4gICAgICAgIDc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA3NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk3LFxuICAgICAgICA0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAzMixcbiAgICAgICAgMSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE0LFxuICAgICAgICAxMSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3MixcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzYsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGMjRPbDdZK3VWY3VIakEzbHdaWkpLN1Z6RmN5b1lKRzMvMmR2YmF3WmJzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJVaGRuRTZiVVNnU3F2Y1lhNnd0SXhRXCIsXG4gIFwicGhvbmVJZFwiOiBcImNiYWM3NmY4LTdjZjYtNDI3Yi1hYmJhLTY1NzA1ZDJkZDk0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTIsXG4gICAgICA1MyxcbiAgICAgIDc0LFxuICAgICAgMTg4LFxuICAgICAgMTU2LFxuICAgICAgMTQxLFxuICAgICAgNCxcbiAgICAgIDU1LFxuICAgICAgMjEwLFxuICAgICAgMixcbiAgICAgIDU3LFxuICAgICAgMTI0LFxuICAgICAgMzAsXG4gICAgICAyMTgsXG4gICAgICAyMzksXG4gICAgICA0NyxcbiAgICAgIDEwNSxcbiAgICAgIDE0MixcbiAgICAgIDIxLFxuICAgICAgMTcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1MixcbiAgICAgIDE3MSxcbiAgICAgIDYwLFxuICAgICAgMjEzLFxuICAgICAgMzEsXG4gICAgICAzOSxcbiAgICAgIDQzLFxuICAgICAgMTU1LFxuICAgICAgMTg1LFxuICAgICAgMTM1LFxuICAgICAgMTc1LFxuICAgICAgMjMsXG4gICAgICAxODUsXG4gICAgICAxMTksXG4gICAgICAyNDUsXG4gICAgICAyMTUsXG4gICAgICA3MyxcbiAgICAgIDQzLFxuICAgICAgMTMzLFxuICAgICAgOTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMzVLNkFXTVFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyNjUwNzM0MTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIuqWtOqWtOqWtOqWtCDqlKrqk5/qlrTqk6Dqk6Lqk5Tqk7Dqk6Mg6pa06pa06pa06pa0XCIsXG4gICAgXCJsaWRcIjogXCIyNzg0NzMxNjM2NzM3NjA6MzBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSXpTODNFUXZKYTl1QVlZQ3lBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJKQkZBa1lSbm5iSVBya01COEs0RTNBS3djTDNYQmEwdWZQUjNIcW44SGowPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlNrZFZJeEQ5aGUyMWhNNkRXSHZCbUlUTDBEL01Sa0VRZjV5Wjh1QlptMGhmcmhzb2JXb0JYMjJ6VkR1K0w3VlFUc1dEelJVTVlGd1l1aUxuYlBCS0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInN4QjRTQzdrSXJXZVlkUXJtNEk4ampsbGJ2QlBJckt6UkgycWFKSzFhbm1XMmhNdVdzTVFTajdDWDYwMEtkZ3UwYzZhU3l1THg5SWtPZ3pTbzgyN2h3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzEyNjUwNzM0MTozMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDYxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjkwNTU1NTNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
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
