const fs = require('fs');
const matter = require('gray-matter');

const DEFAUL_CONFIG = {
  delims: '---',
};

function getPreTab(i = 0) {
  if (i < 1) return '';
  var pre = '';
  for (let index = 0; index < i; index++) {
    pre += '  ';
  }
  return pre;
}

function dfs(obj, level = 0) {
  return Object.entries(obj)
    .map(([key, value]) => {
      if (Object.prototype.toString.call(value) === '[object Object]') {
        return `${getPreTab(level)}${key}:\n${dfs(value, level + 1)}`;
      } else {
        return `${getPreTab(level)}${key}: ${value}\n`;
      }
    })
    .reduce((pre, v) => pre + v, '');
}

/**
 * @description stringfly matterData
 * @author Yrobot
 * @date 2021-05-05
 * @param {*} [data={}] matterData
 * @param {*} [config={ delims = '---' }]
 * @returns
 */
function matterDataStringify(data = {}, config = {}) {
  const { delims } = config;
  return `${delims}\n${dfs(data)}${delims}\n`;
}

/**
 * @description read matter-data, refresh data, then wirte into file
 * @author Yrobot
 * @date 2021-05-05
 * @param {*} path
 * @param {*} [callback=(d) => d] refresh data
 * @param {*} [config={delims}]
 */
function grayMatterWriter(path, callback = (d) => d, config = {}) {
  const allConfig = {
    ...DEFAUL_CONFIG,
    ...config,
  };
  const { data, content } = matter.read(path);
  const newMatterData = callback(data);
  const fileContent = matterDataStringify(newMatterData, allConfig) + content;
  fs.writeFileSync(path, fileContent);
}

module.exports = grayMatterWriter;
