# emoji-info

### Get information about emojis

```js
getEmoji("😳")
```

## Install
```console
$ npm i emoji-info
```

## Usage
```js
import { getEmoji, isEmoji, emojiList, emojiInfo } from "emoji-info"
```

---

## getEmoji(emoji)

Gets the information about an emoji, from either the character, or one of its names.
The emoji is allowed to have `:` either side of it, eg: `:😳:`, `:flushed:`

```js
getEmoji("😳")

// Outputs:
Emoji {
  "emoji": "😳",
  "names": [
    "flushed",
    "flushed_face"
  ],
  "codepoint": "1f633",
  "slug": "flushed-face"
}
```

## isEmoji(emoji, textAllowed)

Checkes whether a string is a valid emoji. The `textAllowed` argument allows emoji names to be entered as well.

```js
isEmoji("😳") // true
isEmoji("flushed") // false
isEmoji("flushed", true) // true
```

## emojiList

Outputs an array of all of the emoji characters.

## emojiInfo

Outputs an array of the information for all emojis.