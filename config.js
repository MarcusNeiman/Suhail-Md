const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_45_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjAxLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgxLFxuICAgICAgICA5OCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjI2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTI2LFxuICAgICAgICAzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDEyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNSxcbiAgICAgICAgNDksXG4gICAgICAgIDczLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQsXG4gICAgICAgIDUwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDcwLFxuICAgICAgICA4MSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDI5LFxuICAgICAgICA0LFxuICAgICAgICA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDI5LFxuICAgICAgICA5NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEwLFxuICAgICAgICA1MyxcbiAgICAgICAgMixcbiAgICAgICAgODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDcwLFxuICAgICAgICA4MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA3MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjksXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzksXG4gICAgICAgIDIsXG4gICAgICAgIDg4LFxuICAgICAgICA0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjM1LFxuICAgICAgICAzOSxcbiAgICAgICAgODksXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExLFxuICAgICAgICAzNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkowdGVkSEJjQVRLTndkeTl0LytPWDhlTDdrNGVtV3Z2UnVQOEtHYThCQms9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInlGQUM2aVlnUUpDa1ZMTlFQUC14VndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZGRiMTZhZDYtMmVhNy00MDkwLWE3MDMtZWQ0MjAyODdmMGY1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMCxcbiAgICAgIDIzNCxcbiAgICAgIDM3LFxuICAgICAgNixcbiAgICAgIDEzMyxcbiAgICAgIDIyNyxcbiAgICAgIDg5LFxuICAgICAgMjUyLFxuICAgICAgNjQsXG4gICAgICAyNDQsXG4gICAgICA0MixcbiAgICAgIDE3NSxcbiAgICAgIDk1LFxuICAgICAgMTk5LFxuICAgICAgMTAyLFxuICAgICAgMTUsXG4gICAgICAxMzYsXG4gICAgICA2LFxuICAgICAgMjEwLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY0LFxuICAgICAgMzIsXG4gICAgICA1NCxcbiAgICAgIDI2LFxuICAgICAgMTY3LFxuICAgICAgMTk0LFxuICAgICAgMjE2LFxuICAgICAgMjUsXG4gICAgICA3LFxuICAgICAgMjQwLFxuICAgICAgNzAsXG4gICAgICAyNDksXG4gICAgICAxODgsXG4gICAgICAxMTMsXG4gICAgICAyMzMsXG4gICAgICAzNSxcbiAgICAgIDE5MixcbiAgICAgIDg4LFxuICAgICAgODcsXG4gICAgICAyNDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMjNDWUxOVjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNTY5MzMwNjo0OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk5laW1hbiBNYXJjdXNcIixcbiAgICBcImxpZFwiOiBcIjEzMzYyOTg1NDM1NTYyNzo0OUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOK2s2dGtGRVBQdnZiVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFYSUF5a1NsNXB3RGllenhCTHJaUWJ5ZVlHb21DWFQrU0YzOFQvRGsxaE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTUtvVVBYNnFnSVB0ZTV1SVJZSFpQYi9TTW5GVXJqc1Nqc0o1WTZGSTBrQ1BZVDlmLzU0NngvS2FxTkRsQXNTMHNYZlBjUVl5TS83NWNPTzFXM1ExRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkVmcjJ3T0J3TFdPWDBHS2JjOGkzVGRnSmVSY0ozZ2xzLzZVblFERE9Jc0NmeTAzR3puOFlHRG5hTVY2cCttSFppYmxSbUJIY1c3L01VRHVTWnVNaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI1NjkzMzA2OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjc3NTU0NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpselwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSmx6Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiZDREbzllZ21GQ3VxV2xUaERUS09hMmtucGV3TWNjUlNYc1RoOXZZTmVhbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTMwNTY1MjExLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Engineer Marc",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
