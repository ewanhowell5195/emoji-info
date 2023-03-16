import emojis from "./emojis.json" assert { type: "json" }
import fs from "node:fs"

export const getEmoji = emoji => emojis.find(e => {
  emoji = emoji.toLowerCase().replace(/^:(.+):$/, "$1")
  return e.emoji === emoji || e.names.includes(emoji.replace(/[\s-]/g, "_"))
})

export function isEmoji(emoji, textAllowed) {
  const found = getEmoji(emoji)
  if (textAllowed && found) return true
  if (found?.emoji === emoji) return true
  return false
}

export const emojiList = emojis.map(e => e.emoji)

export const emojiInfo = emojis