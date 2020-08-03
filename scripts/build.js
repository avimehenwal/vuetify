/* eslint-disable no-multi-spaces */
const spawn = require('cross-spawn')
const process = require('process')           // https://nodejs.org/api/process.html#process_process

// As a global, it is always available to Node.js applications without using require()
let target = process.argv[2]                 // 0:node 1:file.js

const alias = {
  api: '@vuetify/api-generator',
  docs: 'vuetifyjs.com',
  dev: 'vuetify',
}

target = alias[target] || target

if (!target) {
  spawn('yarn', ['lerna', 'run', 'build', '--stream'], { stdio: 'inherit' })
} else {
  spawn('yarn', ['lerna', 'run', 'build', '--scope', target, '--stream'], { stdio: 'inherit' })
}
// --stream      Stream output with lines prefixed by package.
// --scope       Include only packages with names matching the given glob.
