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

export function getEmoji(emoji) {
  emoji = emoji.toLowerCase().trim().replace(/^:(.+):$/, "$1").replace(/^([\u0000-\u{10FFFF}])\ufe0f$/u, "$1").replace(/[\s-]/g, "_")
  return emojis.find(e => e.emoji === emoji || e.names.includes(emoji))
}

export function isEmoji(emoji, textAllowed) {
  const found = getEmoji(emoji)
  if (textAllowed && found) return true
  if (found?.emoji === emoji.replace(/^:(.+):$/, "$1")) return true
  return false
}

export const emojiList = emojis.map(e => e.emoji)

export const emojiInfo = emojis