#!/usr/bin/env node

process.stdout.write(require('.').map(p => JSON.stringify(p)).join('\n'))
