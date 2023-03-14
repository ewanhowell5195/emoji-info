import emojis from "./emojis.json" assert { type: "json" }
import fs from "node:fs"

export const getEmoji = emoji => emojis.find(e => {
  emoji = emoji.toLowerCase()
  return e.emoji === emoji || e.names.includes(emoji.replace(/[\s-]/g, "_"))
})

export const emojiList = emojis.map(e => e.emoji)

export const emojiInfo = emojis