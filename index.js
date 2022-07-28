#!/usr/bin/env node

/**
 * test-cli
 * none
 *
 * @author Przemysław Małecki <none>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const axios = require('axios');

const flags = cli.flags;
const { clear } = flags;

const readline = require('readline-sync');
const cliSelect = require('cli-select');
const chalk = require('chalk');
const figures = require('figures');
const child_process = require('child_process');
const path = require('path');

(async () => {
	init({ clear });

	/*const joke = readline.question('Do you want a joke? (true, false): ');*/
	const values = ['fortnite', 'minecraft', 'cs:go'];

	/* if (joke === 'true') {
		const {
			data: {
				value: { joke }
			}
		} = await axios.post('http://api.icndb.com/jokes/random');
		console.log(joke);
	} else if (joke === 'false') {
		console.log('OK BYE');
	} else {
		console.log('Not valid option');
	}
	*/

	/* const unselected = figures.circle === '( )' && flags.ignore && '◯';
	const selected = figures.circleFilled === '(*)' && flags.ignore && '◉';

	await cliSelect({
		values,
		unselected: unselected === false ? figures.circle : unselected,
		selected:
			selected === false
				? chalk.yellow(figures.circleFilled)
				: chalk.yellow(selected),
		valueRenderer: (value, selected) => {
			if (selected) {
				return chalk.underline(value);
			}

			return value;
		}
	}).then(res => {
		console.log(`Choosed: ${chalk.red(res.value)}`);
	}); */
})();
