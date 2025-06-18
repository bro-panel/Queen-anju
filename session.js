//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0VTZDFSTjllWHcrbTJQeWsxQzZWVlpyck9NYzJHSjJXaFQxZlRaTGwzaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkIrK3ROSnFkbVRyM0xCcDhPVHU0T3JnU2hYcm9ZZm1OU1FDbm92VmJtYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrRGdpdDhZZ1ZkK1RLRFFwWXI4WUl4TTNzTTdRVG5GOTNyUWRMUTlaV1hjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTc3pEWDI3d0ZLNEZMeHlYVERhTFhsQ2haa0ZDcnJnQUhxc3l2VVBRbW1jPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHbDVFNlZValNJYVB6MVF3TEh2NUJmRStpemJmQWFCRHVZSVVDRmFtMms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxzbnZsMEtpMloyRGRkUWZ6WlZIYlN5UnZidGxocE1wYU83MFBteDFGQUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0J0dVZpYTdQNHUzbE9jSTZBQlF0ZXlKWVM0TVpzVlpsM3NVbEV1UE1tTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTFhsZ0dQcUZxT2V4TDJwYityOVpNUkEyd0FpaWl5d1NlRlJwblJyWVoyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFCVERqR05COHZTZytjQXZJRzdrMFlZNE1zTGllS0IwZ2xQU0Z4NnpCNmpaTm9wNi9iSlVpeHJqU0lEa1dPVGZiWkE5UGFTR2RFZ3hTWUFDQU1GM2dBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUsImFkdlNlY3JldEtleSI6IjBYYkpiNS9oOEhNUnFsQzFSazV1Z0ZqRFZzVXVxNjF4cncrSWJIMnBsYVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IlAwVGcwT1FsU3NhV1k3SllUeHFiaGciLCJwaG9uZUlkIjoiMmJiOGYxOTUtNDYzMi00MzAxLWI5Y2EtMjNhMDUyMDdiZGZhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik02TzFpSWZDbWF4bXBVbTlyZ1pJaGQ5b2d1VT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHcVZQaEpaamQyYnhtZERjaHlGUWZTRXJwZ0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUDE3WE1SRzQiLCJtZSI6eyJpZCI6Ijk0NzY2NTE4MjQyOjcwQHMud2hhdHNhcHAubmV0IiwibGlkIjoiODE2MzAxODE5OTA1ODQ6NzBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYmM3OEVFRU91R3k4SUdHQThnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJWSHEza09CamsyekFFSlJkTjNsa2lPTjhxSHdSaG9UemFpV0luSDhRcVVVPSIsImFjY291bnRTaWduYXR1cmUiOiJZS0k2b2lBbVZURzNwRWUxY3IxeWZVenlOYWEzKzFXWllOdS9KbmRhc0NsSVFSM3hrbzRyY3pIUVhKNFJRZVl5eThNT0lNQUlXVVRtdU1SWFdVNmVDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNVBGditXQWphQ08xdTFsSXNTUzVvdDhFYmVQZDBvc0pnYjV1NFRmMHlxaytvYmMxeGNFMk0rL3k3Wm13SGdXVHNSeVgvZDJuUVFPNHdGL3hRd3ZSZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc2NjUxODI0Mjo3MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWUjZ0NURnWTVOc3dCQ1VYVGQ1WklqamZLaDhFWWFFODJvbGlKeC9FS2xGIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQXNJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTAyNTQ0NTYsImxhc3RQcm9wSGFzaCI6IjNSOVozOSJ9",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94766518242",
  PASSWORD: 
    process.env.PASSWORD || "120363418311939411@newsletter",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94766518242"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
