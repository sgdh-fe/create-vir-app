#!/usr/bin/env node

const {
  join
} = require('path')
const fse = require('fs-extra')

const directory = process.argv[2]
const author = process.argv[3] || require('git-user-name')()
const version = process.argv[4] || '1.0.0'


if (!directory) {
  console.error('请指定项目路径')
  return
}

async function run(options) {
  let {
    directory: directory,
    author: author,
    version: version
  } = options
  let src = join(__dirname, 'packages', 'vir-ui')
  let dest = join(process.cwd(), directory)

  let exists = await fse.pathExists(dest)
  if (exists) {
    console.error('项目已经存在')
    return
  }
  await fse.copy(src, dest)
  let pkg = await fse.readJson(join(dest, 'package.json'))
  await fse.outputFile(join(dest, 'package.json'), JSON.stringify(Object.assign(pkg, {
    name: directory,
    author: author,
    version: version
  }), null, 2))
}

run({
  directory: directory,
  author: author,
  version: version
})