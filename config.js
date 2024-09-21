const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_10_07_09_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODAsXG4gICAgICAgIDc3LFxuICAgICAgICA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNjksXG4gICAgICAgIDU5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDcyLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDI4LFxuICAgICAgICA1OCxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1LFxuICAgICAgICAzLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA5NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDUwLFxuICAgICAgICAzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDk1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDgyLFxuICAgICAgICA1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEyLFxuICAgICAgICA5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDczLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxLFxuICAgICAgICA4MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2MyxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDMzLFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0LFxuICAgICAgICA5MixcbiAgICAgICAgNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDc2LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODcsXG4gICAgICAgIDYxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDg1LFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDE3NixcbiAgICAgICAgNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ4QnlsSmViTXRuUVVTMHFiTG5uS2E5SkMxM3F3TWFjRVRPSkRPdml5eHFRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIzQWw1WFdzbFMyeU5YdVRqX19LVVpRXCIsXG4gIFwicGhvbmVJZFwiOiBcImZhMWEzOGRiLTQzZGQtNDExYi1iNjQ2LTQ3YmU3NjQzZDFiNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDUsXG4gICAgICAyMzIsXG4gICAgICAyLFxuICAgICAgOTYsXG4gICAgICA4OSxcbiAgICAgIDE2NyxcbiAgICAgIDE4OCxcbiAgICAgIDI0MCxcbiAgICAgIDIwMCxcbiAgICAgIDUxLFxuICAgICAgMTQwLFxuICAgICAgMTYwLFxuICAgICAgMTQzLFxuICAgICAgODIsXG4gICAgICA0MyxcbiAgICAgIDIzMCxcbiAgICAgIDE2MyxcbiAgICAgIDE2NyxcbiAgICAgIDEwOSxcbiAgICAgIDY0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2OSxcbiAgICAgIDIwMSxcbiAgICAgIDE5OCxcbiAgICAgIDE5OSxcbiAgICAgIDI0NixcbiAgICAgIDIyLFxuICAgICAgMzEsXG4gICAgICAxMjgsXG4gICAgICAxMCxcbiAgICAgIDIxOSxcbiAgICAgIDI1MyxcbiAgICAgIDUzLFxuICAgICAgMTExLFxuICAgICAgMTQ2LFxuICAgICAgNzgsXG4gICAgICAxNixcbiAgICAgIDI1NCxcbiAgICAgIDExMCxcbiAgICAgIDE5OCxcbiAgICAgIDEzNFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUTZCSDVHNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEzNjUwNTUwMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjEwMjY3NTQ4OTE5NDU6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOZitsOVFHRUxtMXVyY0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjN2VkNtZXAyR2Z5WjRXRVMxSmFhNVVTRFZnd0ZKZ3dGWlJzSUNqKzROemM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicmxtck5wbUh0bzNXNU0zZjAveGx4YTIraDVXbVovNWs1VUJTcjFmeEFva25WSHpiTDE5R3l2blVKOGk4TGN5RkNkbUZtRllOMmVreUFPQnJxcTdBQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUnB0bnR5eXhWZnJYMit4OFlJUTVwOWRpN2VLdy95NFlIbktxQTROOWN2NnIwZEVtRzhZZmZFOGsraE80cHVFaWlsTUIwZlBwWEJrVHlzL1VxdU9paFE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEzNjUwNTUwMjo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNjkxMzIxMyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJZeVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQll5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwib003d3k1OEVnenN0WmlXaUQ1cDd4SHVKaU1oKzNPSDZXdzFrUFRURlFIND1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzg3MTY2NTUxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjY5MTI5MDE1ODFcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
