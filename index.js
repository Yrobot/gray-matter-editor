const fs = require('fs');
const matter = require('gray-matter');

const DEFAUL_CONFIG = {
  delims: '---',
};

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
  return `${delims}\n${Object.entries(data)
    .map(([key, value]) => `${key}: ${value}\n`)
    .reduce((pre, v) => pre + v, '')}${delims}\n`;
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
