# gray-matter-editor

> an esay way to edit gray-matter-data in nodejs

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save gray-matter-editor
```

## ChangeLog

Please see the [changelog](CHANGELOG.md)

## Usage

```javascript
const editor = require('gray-matter-editor');

editor($FILE_PATH, (data) => ({
  ...data,
  author: 'yrobot',
}));
```

| before                                                                  | after                                                                   |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7juv4k69j30ea04omxn.jpg) | ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7jzo2qxfj30e8094dgl.jpg) |
| ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7juckqjtj30ew070q3j.jpg) | ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7jx82sehj30eo094dgq.jpg) |
| ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7jui1rzoj30ge09475a.jpg) | ![](https://tva1.sinaimg.cn/large/008i3skNly1gq7jz2hkphj30gy09wwfo.jpg) |

## API

**Params**

* `path` **{String}**: file path
* `transform-hook` **{Function: Object => Object}**: oldData=>newData, call with old matter-data, return new matter-data
* `options` **{Object}** {delims = '---'}
