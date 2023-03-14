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
import { getEmoji, emojiList, emojiInfo } from "emoji-info"
```

---

## getEmoji(emoji)

Gets the information about an emoji, from either the character, or one of its names.

```js
getEmoji("😳")

// Outputs:
// {
//   "emoji": "😳",
//   "names": [
//     "flushed",
//     "flushed_face"
//   ],
//   "codepoint": "1f633",
//   "slug": "flushed-face"
// }
```

## emojiList

Outputs an array of all emoji characters

## emojiInfo

Outputs an array of all emoji information