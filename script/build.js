#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const repos = require('all-the-package-repos');

const filename = path.join(__dirname, '../types.json')
const names = Object.keys(repos)
	.filter(name => name.startsWith('@types/'))
	.map((name) => {
		let typesName = name.substring(7);
		let packageName = typesName;

		if (packageName.includes('__')) {
			packageName = `@${packageName.replace('__', '/')}`;
		}

		return {
			p: repos[packageName] || null,
			l: Object.hasOwn(repos, packageName) ? packageName : null,
			t: typesName,
		};
	})

fs.writeFileSync(filename, JSON.stringify(names, null, 2))
