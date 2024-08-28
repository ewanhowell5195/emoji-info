import emojiData from "./emojis.json" with { type: "json" }
import fs from "node:fs"

class Emoji {
  constructor(args) {
    Object.assign(this, args)
  }

  toString() {
    return this.emoji
  }
}

const emojis = emojiData.map(e => new Emoji(e))

export const getEmoji = emoji => emojis.find(e => {
  emoji = emoji.toLowerCase().replace(/^:(.+):$/, "$1")
  return e.emoji === emoji || e.names.includes(emoji.replace(/[\s-]/g, "_"))
})

export function isEmoji(emoji, textAllowed) {
  const found = getEmoji(emoji)
  if (textAllowed && found) return true
  if (found?.emoji === emoji.replace(/^:(.+):$/, "$1")) return true
  return false
}

export const emojiList = emojis.map(e => e.emoji)

export const emojiInfo = emojis