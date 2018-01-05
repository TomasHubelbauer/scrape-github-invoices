import puppeteer from 'puppeteer';
import secrets from './secrets';

async function run() {
	const browser = await puppeteer.launch({ headless: false, slowMo: 20 });
	const page = (await browser.pages())[0];
	await page.goto('https://github.com/settings/billing');
	console.log('Navigated to the login screen.');

	await page.focus('#login_field');
	await page.keyboard.type(secrets.userName);
	await page.focus('#password');
	await page.keyboard.type(secrets.passphrase);
	await page.click('input[type=submit]');
	console.log('Submitted the login form.');

	// Let the user fill in the credentials and the 2FA code.
	await page.waitForSelector('.billing-section');
	console.log('Entered the billing section.');

	const downloadAs = await page.$$('.boxed-group-table > tbody > tr a');
	console.log(`Found ${downloadAs.length} invoice download links.`);

	for (const downloadA of downloadAs) {
		await downloadA.click();
	}

	console.log(`Downloaded ${downloadAs.length} invoices to your Downloads directory.`);
	await browser.close();
}

run();
