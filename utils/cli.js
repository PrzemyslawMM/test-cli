const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	clear: {
		type: `boolean`,
		alias: `c`,
		desc: `Clear console on start`,
		default: true
	},
	ignore: {
		type: `boolean`,
		alias: `i`,
		desc: `Ignore figures for windows`
	}
};

const commands = {
	help: { desc: `Print help info` }
};

const helpText = meowHelp({
	name: `create`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};

module.exports = meow(helpText, options);
